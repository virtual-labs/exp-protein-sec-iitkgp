importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"4c766b5bec9787c9ff4fa1216c227873","url":"contributors.html"},{"revision":"940d2695bdfa2e4e17b036bb9ac92de0","url":"feedback.html"},{"revision":"5fb39f7121e43c9baa0c9be7ad5a163a","url":"images/Chart-output.jpg"},{"revision":"d6f6f69e764e1078b0714ead2074625d","url":"images/Chromatogram representing SEC.png"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"b038ab371c9097bf4573f81c08dc7c5d","url":"images/lsetupsimulation.png"},{"revision":"cae00fc8343f648c11f0a648b4f60205","url":"images/outputgel.png"},{"revision":"71e18497fdec64377763ef7e7400269b","url":"images/Sample containing mixture of protein.png"},{"revision":"7b637f093ae8d5149c783060b9d91fe1","url":"images/Sample injection and fraction collector.png"},{"revision":"65c3e67e8037a588d882cc60b8fe9f1c","url":"images/simulationsetup.png"},{"revision":"9a7c89b27480066e16a0ee3385970565","url":"index.html"},{"revision":"52b8044d57333d892b156765040a6e3c","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"e877a8cb2d98c92e134339f54c9f7bbb","url":"posttest.html"},{"revision":"f1b9ef04c43f005ff95f70f0d90325f2","url":"posttest.json"},{"revision":"a450fe77c32f8430ffc9d19e8f2f52bc","url":"pretest.html"},{"revision":"61b95a59c318072ca1c97cea51dc6c9b","url":"pretest.json"},{"revision":"e44d08800f7f130a9bd05a0eb3a14199","url":"procedure.html"},{"revision":"250cf3972d335c919a0ac376f44caa41","url":"references.html"},{"revision":"e453b9fc922ccd422880f7919c05f342","url":"simulation.html"},{"revision":"a52e2c91c7b0b35b5f55a89e4fe6ce67","url":"simulation/css/main.css"},{"revision":"82862809d16567801f3380ab43c4739c","url":"simulation/images/buffer.png"},{"revision":"65cde8c04e212801cf3d0255da43578d","url":"simulation/images/bufferdrop.png"},{"revision":"45c903ca15d1fe387b1dbb8b038fcec7","url":"simulation/images/bufferopt.png"},{"revision":"a5cacfc09fdafdd5b6c742f651e0b0c4","url":"simulation/images/bufferrod.png"},{"revision":"577c47b80b53565ec1ac7aecbb0fed2e","url":"simulation/images/colholder.png"},{"revision":"fa842354ff3ceeed44e41e7866b706aa","url":"simulation/images/column.png"},{"revision":"4a255765e6c1142b003d1a575cdcb06f","url":"simulation/images/droplets.png"},{"revision":"296481d46a07d4e359a385c06888b7d3","url":"simulation/images/falcon.png"},{"revision":"6562d48eecd47c99749bb53701b4da9f","url":"simulation/images/falcontube.png"},{"revision":"c1721d4afbbf3b44cf0571b871288889","url":"simulation/images/falconzoom.png"},{"revision":"da7595f9d5599db0513294ea254ade90","url":"simulation/images/inject.jpg"},{"revision":"a460d99460628da4e9cc0f353c2c894b","url":"simulation/images/inject.png"},{"revision":"066161d6431dced91b520ee7e9b1a0c6","url":"simulation/images/injection.png"},{"revision":"3c349bf93ccb1c1927cb2f2c6a9e1ad6","url":"simulation/images/injectpro.png"},{"revision":"9f3cbce25ef63c5f955b698f1e751667","url":"simulation/images/injectpush.jpg"},{"revision":"94ffc45e18a2780d81139fa00c856398","url":"simulation/images/ladder.png"},{"revision":"a94c64296601f104aa05f4b6f77faeef","url":"simulation/images/machine.png"},{"revision":"7c64bbff93530847b31b2b35d13b8be1","url":"simulation/images/outputgel-copy.png"},{"revision":"cae00fc8343f648c11f0a648b4f60205","url":"simulation/images/outputgel.png"},{"revision":"f75f5417f4a44e5cc8aa4fbe988a9adf","url":"simulation/images/proadrop.png"},{"revision":"88b6962ee69fd1ac33a726963de871ff","url":"simulation/images/proaopt.png"},{"revision":"6844469a765d987c5e6361dadff95656","url":"simulation/images/probdrop.png"},{"revision":"eb6facd0b4fbe3f2f19a564c329077f0","url":"simulation/images/probopt.png"},{"revision":"caaab6cff0b825c7f4738e474ad62b4b","url":"simulation/images/procdrop.png"},{"revision":"395c44710c2165149c87b9a63c04a16d","url":"simulation/images/procopt.png"},{"revision":"6ae8180c6c1324fa22af00d3a03ef733","url":"simulation/images/proddrop.png"},{"revision":"1bde451d9e6e8cf03cb072ea919be6ea","url":"simulation/images/prodopt.png"},{"revision":"0d68413a0e3c44a59f1f3733c30b5e50","url":"simulation/images/sds-page image.png"},{"revision":"0dad0a7c776514efcc49a2dabd38ff1e","url":"simulation/images/secmachine.png"},{"revision":"c81195ca1614e6b10c2b8b8848b5db6b","url":"simulation/images/tube.png"},{"revision":"df16d24c6234f1e18424eadb86852b29","url":"simulation/index.html"},{"revision":"ffdf1c39057411fadc57f10d5edd6ab1","url":"simulation/js/main.js"},{"revision":"03af8bdabbf105f7c239501afbd9e549","url":"simulation/js/plotgraph.js"},{"revision":"418c9445e77f5b50e66869d916635b0b","url":"theory.html"},{"revision":"65f60f57e778ca89f732072e79689585","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );