import "./style.less";

export default {
  bind(el) {
    // 第一步先改变hover样式
    el.style.cursor = "pointer";
    el.addEventListener(
      "click",
      e => {
        // copy,移动图片
        copyAndMoveImg(e);
        // 关闭遮罩，还原图片
      },
      false
    );
  }
};

function copyAndMoveImg(e) {
  // 创建遮罩
  let current = 0;
  let content = `<img :src=require("../../../../static/images/xuanzhuan.png") style='height:30px;width=30px;margin-right:200px;margin-bottom:120px;'>`;
  let viewImgBg = document.createElement("div");
  let div1 = document.createElement("div");
  viewImgBg.className = "dir-view-bg";
  viewImgBg.appendChild(div1);
  div1.innerHTML = content;
  document.body.appendChild(viewImgBg);

  const ele = e.target;
  const elePositionParam = ele.getBoundingClientRect();
  const imgSrc = ele.getAttribute("src");
  const newParam = caculNewParam(elePositionParam);
  let newImg = document.createElement("img");
  newImg.className = "dir-view-img";
  renderImg(newImg, elePositionParam);
  newImg.setAttribute("src", imgSrc);
  document.body.appendChild(newImg);
  div1.className = "dir-img-style";
  div1.onclick = function(e) {
    current = current + 90;
    newImg.style.transform = "rotate(" + current + "deg)";
    e.stopPropagation();
  };
  setTimeout(() => {
    renderImg(newImg, newParam, el => {
      el.addEventListener(
        "click",
        () => {
          const cfg = {
            newImg: newImg,
            elePositionParam: elePositionParam
          };
          removeDom(cfg);
        },
        false
      );
    });
  }, 100);

  viewImgBg.addEventListener(
    "click",
    () => {
      const cfg = {
        newImg: newImg,
        elePositionParam: elePositionParam
      };
      removeDom(cfg);
    },
    false
  );
}

function renderImg(ele, imgParam, cb) {
  ele.style.width = `${imgParam.width}px`;
  ele.style.height = `${imgParam.height}px`;
  ele.style.top = `${imgParam.top}px`;
  ele.style.left = `${imgParam.left}px`;
  cb ? cb(ele) : "";
}

// 计算图片的新参数
function caculNewParam(param) {
  const _WIN_HEIGHT = document.body.clientHeight;
  const _WIN_WIDTH = document.body.clientWidth;
  return {
    left: (_WIN_WIDTH - param.width * 3) / 2,
    top: (_WIN_HEIGHT - param.height * 3) / 2,
    width: param.width * 3,
    height: param.height * 3
  };
}

// 还原，销毁dom
function removeDom(cfg) {
  renderImg(cfg.newImg, cfg.elePositionParam, () => {
    setTimeout(() => {
      const willRemoveImg = document.getElementsByClassName("dir-view-img")[0];
      const willRemoveBg = document.getElementsByClassName("dir-view-bg")[0];
      document.body.removeChild(willRemoveBg);
      document.body.removeChild(willRemoveImg);
    }, 300);
  });
}
