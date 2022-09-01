/* eslint-disable linebreak-style */
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'ie >= 8', // 兼容 ie7 以上浏览器
        'Firefox >= 3.5', // 兼容火狐版本大于 3.5 以上浏览器
        'chrome >= 35', // 兼容谷歌版本大于 35 以上浏览器
        'opera >= 11.5', // 兼容欧朋大于 11.5 以上浏览器
      ],
    },

    'postcss-sprites': {
      // 合并的图片的保存位置
      spritePath: './dist/images',

      // 分组打包(根据文件夹分组)
      groupBy(img) {
        const path = img.url.substr(0, img.url.lastIndexOf('/'));
        const dir = path.substr(path.lastIndexOf('/') + 1);
        return Promise.resolve(dir);
      },

      // 过滤不需要被合并的图片(如果是jpg就不合并)
      filterBy(img) {
        if (/\.jpg$/i.test(img.url)) {
          return Promise.reject();
        }
        return Promise.resolve();
      },
    },

  },
};
