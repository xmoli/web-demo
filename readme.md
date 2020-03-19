
# 简要

模仿一些网站，以此练习css 原生js。

一些css小技巧。

# css布局总结

inline-block的方式布局只需要考虑空的字带来的问题，设置字体为零。

float的方式需要考虑清楚浮动和盒子不能撑高。

以上布局margin: 0 auto水平居中，父级有固定宽度。

flex是一种方便的布局方式。需要考虑浏览器的兼容。

css 前缀的管理（借助软件）。

* css中的变量：currentColor(字体颜色)。em(单位单位父字体)。rem(单位根字体大小)。
* px
    一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）。
    对于打印机和高分辨率屏幕，一个 CSS 像素往往占多个设备像素。一般来说，每英寸的像素的数量保持在 96 左右， 1px = 1in 的 96 分之一。
* vh和vw

建议设置根字体使用px,其他相关尺寸使用rem。

建议使用弹性布局。

# css文字排版

* ex和ch

字体和大小讲究。

设置字体的行高间距对齐等。line-height==height单行字体垂直居中。

# css美工

css调色rbga、hlsa:根据基本色，加白或加黑（核心是设置透明度）。

css材质background-image,background-color：渐变色（linear-gradient），建议不要跨色调。其他需自己加图片。透明度驱动的材质推荐。图片的放置方法。

css形状border：核心是四个边框大小颜色的不同组合。

css光影box-shadow：阴影的合理设置，使立体，使动感，使Q。

clip-path和mask：使用遮掩关系创建特殊样式。

# css动态效果

滑入滑出，渐影渐显，转入转出，缩放。

# 参考资料

* github.com/qianguyihao/web
* MDN
* 《CSS揭秘》Lea Verou
