const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");
const imagemin = require("gulp-imagemin");
      
const compressProjectImages = async () => {
  await src("homepage/assets/*.{png,jpg,jpeg}")
    .pipe(
      sharpResponsive({
        formats: [
          // png
          { width: 256, format: "png", rename: { suffix: "-256" } },
          { width: 512, format: "png", rename: { suffix: "-512" } },
          { width: 1024, format: "png", rename: { suffix: "-1024" } },
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
        ],
      })
    )
    .pipe(dest("homepage/assets/compressed"));
  await src("homepage/assets/compressed*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("homepage/assets/compressed"));
};
const compressProjectNestedImages = async () => {
  await src("homepage/assets/images/*.{png,jpg,jpeg}")
    .pipe(
      sharpResponsive({
        formats: [
          // png
          { width: 256, format: "png", rename: { suffix: "-256" } },
          { width: 512, format: "png", rename: { suffix: "-512" } },
          { width: 1024, format: "png", rename: { suffix: "-1024" } },
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
        ],
      })
    )
    .pipe(dest("homepage/assets/images/compressed"));
  await src("homepage/assets/images/compressed*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("homepage/assets/images/compressed"));
};
const compressProjectPortfolioImages = async () => {
  await src("homepage/assets/portfolio/*.{png,jpg,jpeg}")
    .pipe(
      sharpResponsive({
        formats: [
          // png
          { width: 256, format: "png", rename: { suffix: "-256" } },
          { width: 512, format: "png", rename: { suffix: "-512" } },
          { width: 1024, format: "png", rename: { suffix: "-1024" } },
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 1024, format: "jpeg", rename: { suffix: "-1024" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 1024, format: "webp", rename: { suffix: "-1024" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 1024, format: "avif", rename: { suffix: "-1024" } },
        ],
      })
    )
    .pipe(dest("homepage/assets/portfolio/compressed"));
  await src("homepage/assets/portfolio/compressed*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("homepage/assets/portfolio/compressed"));
};
module.exports = {
  compressProjectImages,
  compressProjectNestedImages,
  compressProjectPortfolioImages
};
