wrapper = document.getElementsByClassName("moreabout")[0];
console.log(wrapper)
wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");
spans = wrapper.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
    spans[i].style.animationDelay = i * 25 + "ms";
}