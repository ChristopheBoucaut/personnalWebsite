exports.config =
    paths:
        public: 'app'
        watched: ['js', 'css', 'views', 'index.html', 'images', 'bower_components/bootstrap/dist/fonts']

    conventions:
        ignored: /^(app|(bower_components\/(bootstrap|jquery)\/(?!dist|fonts)))/
        assets: /(bootstrap\/dist\/fonts)|(images)/

    modules:
        definition: false
        wrapper: false

    files:
        javascripts:
            joinTo:
                'js/app.js': /^js/
                'js/vendor.js': (path) ->
                    /^bower_components/.test(path) and not /npm\.js$/.test(path) and not /\.min\.js$/.test(path)
            order:
                before: [
                    'bower_components/jquery/dist/jquery.js'
                ]
        stylesheets:
            joinTo:
                'css/app.css': /^css/
                'css/vendor.css': /^bower_components\/bootstrap\/dist\/css\/bootstrap.css/
            order:
                before: [
                    'bower_components/bootstrap/dist/css/bootstrap.css'
                ]