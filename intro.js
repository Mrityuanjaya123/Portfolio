let wrapper = document.getElementsByClassName("desc")[0];
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");
let spans = wrapper.getElementsByTagName("span");
for(let i=0;i<spans.length;i++){
  spans[i].style.animationDelay = i*15+"ms";
}

let ids = ["CP", "CPP", "C", "Py", "HTML", "CSS", "JS", "SQL", "DSA", "PS"]
let content = [["5⭐ at CodeChef", "4⭐ at HackerRank C++", "4⭐ at HackerRank C", "5⭐ at HackerRank Python", "Projects on GitHub", "Projects on GitHub", "Projects on GitHub", "4⭐ at HackerRank SQL", "DSA Basic CodeChef Certified", "Problem Solving HackerRank Certified(basic)"], ["Competitive Programming", "C++", "C", "Python", "HTML", "CSS", "JavaScript", "SQL", "Data Structures and Algorithms", "Problem Solving"]]
function changep(event, x, y){
  let box = document.getElementById(ids[y])
  box.innerHTML = content[x][y];
}