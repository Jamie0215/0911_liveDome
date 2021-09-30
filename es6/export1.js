export default {
  data: ["這是第一句話", "這是第二句話", "這是第三句話"],
  removeData(id) {
    //事件觸發
    // console.log(id);
    //split => 操控String , splice => 操控Array , slice => 操控Array及String
    this.data.splice(id, 1);
    console.log(this);
    this.render();
  },
  render() {
    //渲染方法
    const list = document.querySelector(".component ul");
    let content = "";
    this.data.forEach((item, i) => {
      // content = `${content}<li>${item}</li>` //助教老師的教法
      content +=`<li>`+item +`<button type="button" class="btn" data-id="`+ i +`">刪除</button></li>`;
      // console.log(content)
    });
    list.innerHTML = content;
    const btns = document.querySelectorAll(".btn");
    //  console.log(btns);
    btns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        //注意:function(e) 屬於callback方式this會指向到全域
        // console.log(e.target.dataset.id);
        this.removeData(e.target.dataset.id);
      })
    );
  },
  init() {
    //生命週期
    //先初始化
    this.render();
  },
};
