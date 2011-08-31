require 'pathname'

class ::Jax::Engine < ::Rails::Railtie
  # autoload :Configurable,  "jax/engine/configurable"
  autoload :Configuration, "jax/engine/configuration"
  
  class << self
    attr_accessor :called_from
    
    def inherited(base)
      base.called_from = detect_caller unless base.abstract_railtie?
      super
    end

    def find_root_with_flag(flag, default=nil)
      root_path = self.called_from

      while root_path && File.directory?(root_path) && !File.exist?("#{root_path}/#{flag}")
        parent = File.dirname(root_path)
        root_path = parent != root_path && parent
      end

      root = File.exist?("#{root_path}/#{flag}") ? root_path : default
      raise "Could not find root path for #{self}" unless root

      RbConfig::CONFIG['host_os'] =~ /mswin|mingw/ ?
        Pathname.new(root).expand_path : Pathname.new(root).realpath
    end
  end
  
  def config
    @config ||= Jax::Application::Configuration.new(self.class.find_root_with_flag("app", Dir.pwd))
  end
  
  initializer :detect_shaders do |app|
    app.shader_load_paths.concat config.paths.app.shaders.paths
    app.detect_shaders config.paths.app.shaders.to_a
  end
  
  initializer :asset_paths do |app|
    app.asset_paths.concat config.paths.public.to_a
  end
  
  initializer :javascript_source_roots do |app|
    app.javascript_source_roots << config.root.to_s
  end
  
  initializer :javascript_load_paths do |app|
    config.paths.app.each do |app_path|
      app.javascript_load_paths.push app_path
    end
    app.javascript_load_paths.push config.paths.lib.to_a.first
  end
  
  initializer :javascript_sources do |app|
    sources = []
    %w(helpers models controllers views shaders).collect do |base|
      config.paths.app.send(base).to_a.each do |path|
        sources.concat Dir[File.join(path, "**/*.js")]
      end
    end
    app.javascript_sources.concat sources.uniq
  end
  
  initializer :resource_paths do |app|
    app.resource_paths << config.paths.app.resources
  end
end
