exports.config =
    paths:
        public: 'app'
        watched: ['src', 'bower_components/bootstrap/dist/fonts', 'bower_components/bootstrap/dist/css/bootstrap.css']

    conventions:
        ignored: /^(app|(bower_components\/(bootstrap|jquery)\/(?!dist|fonts)))/
        assets: /(bootstrap\/dist\/fonts)|(src\/assets)/

    modules:
        definition: false
        wrapper: false

    sourceMaps: false

    files:
        javascripts:
            joinTo:
                'js/app.js': /^src\/js/
                'js/vendor.js': (path) ->
                    /^bower_components/.test(path) and not /npm\.js$/.test(path) and not /\.min\.js$/.test(path)
            order:
                before: [
                    'bower_components/jquery/dist/jquery.js'
                ]
        stylesheets:
            joinTo:
                'css/app.css': /^src\/css/
                'css/vendor.css': /^bower_components\/bootstrap\/dist\/css\/bootstrap\.css/
            order:
                before: [
                    'bower_components/bootstrap/dist/css/bootstrap.css'
                ]
