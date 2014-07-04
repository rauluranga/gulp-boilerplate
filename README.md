This looks like a permissions issue in your home directory. To reclaim ownership of the .npm directory execute

sudo chown -R `whoami` ~/.npm


Using bourbon and neat

npm install --save-dev node-bourbon
npm install --save-dev node-neat


http://laravel-news.com/2014/03/using-bourbon-neat-with-gulp



//@see https://github.com/prawnstar/gulp-jade-sass
//@see http://maximilianschmitt.me/posts/gulp-js-tutorial-sass-browserify-jade/
//@see http://www.alfanso.com/blog/2014/03/04/improve-front-end-workflow-using-gulpjs/
//@see https://github.com/zont/gulp-bower
//@see https://github.com/ck86/gulp-bower-files
//@see https://medium.com/publish-what-you-learn/playing-with-gulp-browserify-node-sass-bourbon-react-and-shoe-a1ea2dd606b
//@see http://stephentudor.com/blog/2014/02/11/gulp-and-browserify.html
//@see http://viget.com/extend/gulp-browserify-starter-faq
//@see http://travismaynard.com/writing/getting-started-with-gulp
