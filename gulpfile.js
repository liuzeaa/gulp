var gulp=require("gulp"),
    spritesmith=require('gulp.spritesmith');

gulp.task('default', function () {
    return gulp.src('src/images/*.png')//需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'css/sprite.png',//保存合并后图片的地址
            cssName: 'css/sprite.css',//保存合并后对于css样式的地址
            padding:80,//合并时两个图片的间距
            algorithm: 'top-down',//注释1
            cssTemplate: function (data) {
                var arr=[];
                data.sprites.forEach(function (sprite) {
                    arr.push(".icon-"+sprite.name+
                    "{" +
                    "background-image: url('"+sprite.escaped_image+"');"+
                    "background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
                    "width:"+sprite.px.width+";"+
                    "height:"+sprite.px.height+";"+
                    "}\n");
                });
                return arr.join("");
            }

        }))
        .pipe(gulp.dest('dist/'));
});