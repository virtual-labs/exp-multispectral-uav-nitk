// function navNext()
// {
// 	for(temp=0;temp<=1;temp++)
// 	{
// 		document.getElementById("canvas"+temp).style.visibility="hidden";
// 	}
// 	simsubscreennum+=1;
// 	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
// 	document.getElementById("nextButton").style.visibility="hidden";
// 	magic();
// }
let checkCount = 0;
var questions = {
  ans1: 0,
  options: [],
  nextFunction: function () {},
  setOptions: function (opt) {
    questions.options = opt;
  },
  setOptions1: function (d1, d2, d3) {
    questions.options = new Array(d1, d2, d3);
  },
  setAns: function (ans) {
    if (simsubscreennum == 10) {
      if (itv < 10) {
        questions.ans1 = 1;
        inCount = 0;
      } else if (itv > 10 && itv < 20) {
        questions.ans1 = 2;
        inCount = 1;
      } else if (itv > 20 && itv < 30) {
        questions.ans1 = 3;
        inCount = 2;
      } else if (itv > 35) {
        questions.ans1 = 4;
        inCount = 3;
      }
    } else {
      questions.ans1 = ans;
    }
  },
  frameQuestions: function (qun) {
    var myDiv = document.getElementById("question-div");
    var myDiv1 = document.getElementById("divq");
    // myDiv.style.visibility = "visible";
    myDiv.style.animation = "blinkingText 1s 1";
    myDiv.style.visibility = "visible";
    myDiv.classList.add("fadeIn");
    document.getElementById("divq").innerHTML = qun;
    //Create and append select list
    var selectList = document.createElement("select");
    selectList.setAttribute("id", "mySelect");
    selectList.setAttribute("autocomplete", "off");
    // selectList.setAttribute("onchange", "questions.setAnswer()");

    var button1 = document.createElement("input");
    button1.setAttribute("onclick", "questions.setAnswer(this)");
    button1.setAttribute("type", "button");
    button1.setAttribute("value", "OK");
    button1.setAttribute("style", "cursor:pointer");

    // Appending the contents to the division
    myDiv1.appendChild(selectList);
    myDiv1.appendChild(button1);

    //Create and append the options
    for (var i = 0; i < questions.options.length; i++) {
      var opt = document.createElement("option");
      opt.setAttribute("value", questions.options[i]);
      opt.text = questions.options[i];
      selectList.appendChild(opt);
    }
  },
  setAnswer: function (ev) {
    var x = document.getElementById("mySelect");
    var i = x.selectedIndex;
    if (i == 0) {
      var dispAns = document.createElement("p");
      dispAns.innerHTML = "You have not selected any value";
      document.getElementById("divq").appendChild(dispAns);
      setTimeout(function () {
        dispAns.innerHTML = "";
      }, 500);
    } else if (i == questions.ans1) {
      ev.onclick = "";
      var dispAns = document.createElement("p");
      dispAns.innerHTML =
        "You are right <span class='boldClass'>&#128077;</span> ";
      document.getElementById("divq").appendChild(dispAns);
      questions.callNextFunction();
    } else {
      ev.onclick = "";
      var dispAns = document.createElement("p");
      dispAns.innerHTML =
        "You are Wrong <span class='boldClass'>&#128078;</span><br>Answer is: " +
        x.options[questions.ans1].text;
      document.getElementById("divq").appendChild(dispAns);
      questions.callNextFunction();
    }
  },
  setCallBack: function (cb) {
    nextFunction = cb;
  },
  callNextFunction: function () {
    setTimeout(function () {
      // document.getElementById("question-div").innerHTML = "";
      document.getElementById("question-div").style.animation = "";
      document.getElementById("question-div").style.visibility = "hidden";
      nextFunction();
    }, 500);
  },
};
var i;
// var p=[100, 200, 300];
// function ff(){
//  if(i==0){
//   document.getElementById("res").style.visibility="visible";
//  onse
//  }

// }
function navNext() {
  for (temp = 0; temp <= 8; temp++) {
    document.getElementById("canvas" + temp).style.visibility = "hidden";
  }
  simsubscreennum += 1;
  document.getElementById("canvas" + simsubscreennum).style.visibility =
    "visible";
  document.getElementById("nextButton").style.visibility = "hidden";
  magic();
}

function animatearrow() {
  if (document.getElementById("arrow1").style.visibility == "hidden")
    document.getElementById("arrow1").style.visibility = "visible";
  else document.getElementById("arrow1").style.visibility = "hidden";
}
function animatearrow1() {
  if (document.getElementById("arrow2").style.visibility == "hidden")
    document.getElementById("arrow2").style.visibility = "visible";
  else document.getElementById("arrow2").style.visibility = "hidden";
}

function myStopFunction() {
  clearInterval(myInt);
  document.getElementById("arrow1").style.visibility = "hidden";
}
// function myStopFunction1() {
//   clearInterval(myInt);
//   document.getElementById("arrow2").style.visibility = "hidden";
// }
var released = 1;
var v = 0;
function magic() {
  if (simsubscreennum == 1) {
    // myInt = setInterval(function(){ animatearrow(); }, 750);
    // document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:288px; top:262px; height: 30px; z-index: 10;";
    // document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";

    // document.getElementById("nextButton").style.visibility="visible";

    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    document.getElementById("arrow1").style =
      "visibility:visible; position:absolute; left:288px; top:262px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(90deg)";
    document.getElementById("arrow1").style.transform = "rotate(90deg)";

    document.getElementById("1-2").style.visibility = "visible";
    document.getElementById("1-3").style.visibility = "visible";
    document.getElementById("1-3").onclick = function () {
      myStopFunction();
      document.getElementById("1-3").style.transformOrigin = "80% 90%";
      document.getElementById("1-3").style.animation = "moveAntena 1s forwards";
      setTimeout(function () {
        myInt = setInterval(function () {
          animatearrow();
        }, 500);
        document.getElementById("arrow1").style =
          "visibility:visible; position:absolute; left:300px; top:206px; height:40px; z-index:10;";
        document.getElementById("arrow1").style.WebkitTransform =
          "rotate(270deg)";
        document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
        document.getElementById("arrow1").style.transform = "rotate(270deg)";
        document.getElementById("1-4").style.visibility = "visible";
        document.getElementById("1-4").onclick = function () {
          myStopFunction();
          document.getElementById("1-4").onclick = "";
          document.getElementById("1-4").style.transformOrigin = "20% 70%";
          document.getElementById("1-4").style.animation =
            "moveAntenas 1s forwards";
          setTimeout(function () {
            document.getElementById("nextButton").style.visibility = "visible";
          }, 1000);
        };
      }, 500);
    };
  } else if (simsubscreennum == 2) {
    document.getElementById("1-2").style.visibility = "hidden";
    document.getElementById("1-4").style.visibility = "hidden";
    document.getElementById("1-3").style.visibility = "hidden";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    document.getElementById("arrow1").style =
      "visibility:visible; position:absolute; left:370px; top:345px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
    document.getElementById("arrow1").style.transform = "rotate(0deg)";

    document.getElementById("ps-1").onclick = function () {
      myStopFunction();
      document.getElementById("ps-1").onclick = "";
      document.getElementById("ps-1").style.animation =
        "rotate_animation 2s forwards";
      document.getElementById("1-6").style.visibility = "visible";
      document.getElementById("ps-1").onclick = "";

      setTimeout(function () {
        document.getElementById("ps-1").style.visibility = "hidden";
        document.getElementById("pk").style.visibility = "hidden";
        document.getElementById("pk3").style.visibility = "visible";
        document.getElementById("1-7").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("hand").style.visibility = "visible";
        }, 500);
        document.getElementById("hand").style.animation =
          "moveHand 2s forwards";
        setTimeout(function () {
          document.getElementById("1-7").style.visibility = "hidden";
          document.getElementById("1-6").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("1-6").style.animation =
              "moveup 2s forwards";

            document.getElementById("hand").style.visibility = "hidden";
            setTimeout(function () {
              document.getElementById("3-1").style.visibility = "visible";
              document.getElementById("1-6").style.visibility = "hidden";
              document.getElementById("pk").style.visibility = "hidden";
              document.getElementById("pk3").style.visibility = "hidden";
              document.getElementById("hand").style.visibility = "hidden";
              document.getElementById("1-2").style.visibility = "hidden";

              myInt = setInterval(function () {
                animatearrow();
              }, 500);
              document.getElementById("arrow1").style =
                "visibility:visible; position:absolute; left:508px; top:250px; height: 30px; z-index: 10;";
              document.getElementById("arrow1").style.WebkitTransform =
                "rotate(180deg)";
              document.getElementById("arrow1").style.transform =
                "rotate(180deg)";
              document.getElementById("3-2").style.visibility = "visible";
              document.getElementById("3-2").onclick = function () {
                myStopFunction();
                document.getElementById("3-2").onclick = "";
                document.getElementById("3-1").style.animation =
                  "zoomInDrone 1s forwards";
                document.getElementById("3-2").style.animation =
                  "moveIpad 1s forwards";
                setTimeout(function () {
                  document.getElementById("4-1").style.visibility = "visible";

                  document.getElementById("3-2").style.visibility = "hidden";
                  document.getElementById("3-1").style.visibility = "hidden";
                  document.getElementById("nextButton").style.visibility =
                    "visible";
                }, 500);
              };
            }, 2000);
          }, 500);
        }, 1000);
      }, 1000);
    };
    //   myInt=setInterval(function(){ animatearrow(); }, 500);
    //   document.getElementById("arrow1").style="visibility:visible; position:absolute; left:285px; top:335px; height:40px; z-index:10; ";
    //   document.getElementById("arrow1").style.WebkitTransform="rotate(270deg)";
    //   document.getElementById("arrow1").style.msTransform="rotate(270deg)";
    //   document.getElementById("arrow1").style.transform="rotate(270deg)";
  } else if (simsubscreennum == 3) {
    document.getElementById("4-1").style.visibility = "hidden";
    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    document.getElementById("arrow1").style =
      "visibility:visible; position:absolute; left:607px; top:181px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
    document.getElementById("arrow1").style.transform = "rotate(270deg)";
    setTimeout(function () {
      document.getElementById("4-2-2").onclick = function () {
        myStopFunction();
        document.getElementById("4-2-2").onclick = "";
        document.getElementById("4-2-2").style.animation =
          "connect 2s forwards";

        setTimeout(function () {
          document.getElementById("4-2").style.visibility = "visible";
          document.getElementById("4-2-2").style.visibility = "hidden";
          myInt = setInterval(function () {
            animatearrow();
          }, 500);
          document.getElementById("arrow1").style =
            "visibility:visible; position:absolute; left:541px; top:250px; height:40px; z-index:10;";
          document.getElementById("arrow1").style.WebkitTransform =
            "rotate(360deg)";
          document.getElementById("arrow1").style.msTransform =
            "rotate(360deg)";
          document.getElementById("arrow1").style.transform = "rotate(360deg)";
          setTimeout(function () {
            document.getElementById("4-2").onclick = function () {
              myStopFunction();
              document.getElementById("4-2").onclick = "";
              document.getElementById("4-1-1").style.animation =
                "zoomOutDrone 1s forwards";
              document.getElementById("4-2").style.animation =
                "zoomOutDrone1 1s forwards";

              //document.getElementById("4-2").style.visibility = "hidden";
              document.getElementById("4-4").style.visibility = "visible";
              document.getElementById("4-4").style.animation =
                "zoomOutDrone2 1s forwards";
              document.getElementById("dialog").style.visibility = "visible";
              document.getElementById("dialog1").style.visibility = "visible";
              document.getElementById("4-5").style.visibility = "visible";
              setTimeout(function () {
                document.getElementById("4-7").style.visibility = "visible";
                document.getElementById("4-5").style.visibility = "hidden";
                document.getElementById("4-6").style.visibility = "hidden";
                document.getElementById("4-4").style.visibility = "hidden";
              }, 1000);
              // document.getElementById("4-4").style.visibility = "hidden";
              // document.getElementById("4-5").style.visibility = "visible";
              document.getElementById("nextButton").style.visibility =
                "visible";
            };
          }, 500);
        }, 2000);
      };
    }, 500);
  } else if (simsubscreennum == 4) {
    document.getElementById("4-7").style.visibility = "hidden";
    document.getElementById("4-5").style.visibility = "hidden";
    document.getElementById("4-2").style.visibility = "hidden";
    document.getElementById("4-1-1").style.visibility = "hidden";
    document.getElementById("4-4").style.visibility = "hidden";
    document.getElementById("dialog").style.visibility = "hidden";
    document.getElementById("dialog1").style.visibility = "hidden";

    document.getElementById("5-3").style.visibility = "hidden";
    document.getElementById("5-2").style.visibility = "hidden";
    document.getElementById("5-7").style.visibility = "visible";
    document.getElementById("5-7").onclick = function () {
      document.getElementById("5-7").style.visibility = "hidden";
      hidedialog4();
      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible; position:absolute; left:389px; top:231px; height:40px; z-index:10;";
      document.getElementById("arrow1").style.WebkitTransform =
        "rotate(270deg)";
      document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
      document.getElementById("arrow1").style.transform = "rotate(270deg)";
      setTimeout(function () {
        document.getElementById("6-4").onclick = function () {
          myStopFunction();
          document.getElementById("6-4").onclick = "";
          document.getElementById("6-4").style.animation =
            "movelock 1s forwards";
          myInt = setInterval(function () {
            animatearrow();
          }, 500);
          document.getElementById("arrow1").style =
            "visibility:visible; position:absolute; left:550px; top:250px; height:40px; z-index:10;";
          document.getElementById("arrow1").style.WebkitTransform =
            "rotate(0deg)";
          document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
          document.getElementById("arrow1").style.transform = "rotate(0deg)";
          setTimeout(function () {
            document.getElementById("6-1").onclick = function () {
              myStopFunction();
              document.getElementById("6-1").onclick = "";
              document.getElementById("6-1").style.visibility = "hidden";
              document.getElementById("6-4").style.visibility = "hidden";
              document.getElementById("6-2").style.visibility = "visible";
              myInt = setInterval(function () {
                animatearrow();
              }, 500);
              document.getElementById("arrow1").style =
                "visibility:visible; position:absolute; left:257px; top:241px; height:40px; z-index:10;";
              document.getElementById("arrow1").style.WebkitTransform =
                "rotate(-90deg)";
              document.getElementById("arrow1").style.msTransform =
                "rotate(-90deg)";
              document.getElementById("arrow1").style.transform =
                "rotate(-90deg)";
              setTimeout(function () {
                document.getElementById("6-2").onclick = function () {
                  myStopFunction();
                  document.getElementById("6-2").onclick = "";
                  document.getElementById("6-2").style.animation =
                    "zoomOutBox 1s forwards";

                  document.getElementById("6-3").style.visibility = "visible";
                  document.getElementById("6-3").style.animation =
                    "takedrone 2s forwards";
                  setTimeout(function () {
                    myInt = setInterval(function () {
                      animatearrow();
                    }, 500);
                    document.getElementById("arrow1").style =
                      "visibility:visible; position:absolute; left:529px; top:511px; height:40px; z-index:10;";
                    document.getElementById("arrow1").style.WebkitTransform =
                      "rotate(90deg)";
                    document.getElementById("arrow1").style.msTransform =
                      "rotate(90deg)";
                    document.getElementById("arrow1").style.transform =
                      "rotate(90deg)";
                    setTimeout(function () {
                      document.getElementById("6-3").onclick = function () {
                        myStopFunction();
                        document.getElementById("6-3").onclick = "";
                        document.getElementById("6-3").style.visibility =
                          "hidden";
                        document.getElementById("6-3-4").style.visibility =
                          "visible";
                        document.getElementById("6-3-3").style.visibility =
                          "visible";
                        document.getElementById("6-3-4").style.animation =
                          "movegimble 5s forwards";

                        setTimeout(function () {
                          myInt = setInterval(function () {
                            animatearrow();
                          }, 500);
                          document.getElementById("arrow1").style =
                            "visibility:visible; position:absolute; left:529px; top:511px; height:40px; z-index:10;";
                          document.getElementById(
                            "arrow1"
                          ).style.WebkitTransform = "rotate(90deg)";
                          document.getElementById("arrow1").style.msTransform =
                            "rotate(90deg)";
                          document.getElementById("arrow1").style.transform =
                            "rotate(90deg)";
                          setTimeout(function () {
                            document.getElementById("6-3-3").onclick =
                              function () {
                                myStopFunction();
                                document.getElementById(
                                  "6-3-3"
                                ).style.visibility = "hidden";

                                document.getElementById(
                                  "6-3-3a"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-3-4a"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-3-4b"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-3-4c"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-3-4d"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-3-4e"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-3-4f"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "6-2"
                                ).style.visibility = "hidden";
                                myInt = setInterval(function () {
                                  animatearrow();
                                }, 500);
                                document.getElementById("arrow1").style =
                                  "visibility:visible; position:absolute; left:279px; top:277px; height:40px; z-index:10;";
                                document.getElementById(
                                  "arrow1"
                                ).style.WebkitTransform = "rotate(180deg)";
                                document.getElementById(
                                  "arrow1"
                                ).style.msTransform = "rotate(180deg)";
                                document.getElementById(
                                  "arrow1"
                                ).style.transform = "rotate(180deg)";
                                setTimeout(function () {
                                  document.getElementById("6-3-4a").onclick =
                                    function () {
                                      myStopFunction();
                                      document.getElementById(
                                        "6-3-4aa"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6-3-4bb"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6-3-4cc"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6-3-4dd"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6-3-4ee"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6-3-4ff"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6aa"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6bb"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6cc"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6dd"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6ee"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "6ff"
                                      ).style.visibility = "visible";
                                      setTimeout(function () {
                                        document.getElementById(
                                          "6-3-4aa"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4bb"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4cc"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4dd"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4ee"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4ff"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6aa"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6bb"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6cc"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6dd"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6ee"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6ff"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-3a"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4a"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4b"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4c"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4d"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4e"
                                        ).style.visibility = "hidden";
                                        document.getElementById(
                                          "6-3-4f"
                                        ).style.visibility = "hidden";





                                        document.getElementById("6-3").style.visibility =
                                          "hidden";
                                        document.getElementById("6-3-3").style.visibility =
                                          "hidden";
                                        document.getElementById("6-2").style.visibility =
                                          "hidden";
                                        document.getElementById("6-5").style.visibility =
                                          "visible";
                                        document.getElementById("6-6").style.visibility =
                                          "visible";
                                        myInt = setInterval(function () {
                                          animatearrow();
                                        }, 500);
                                        document.getElementById("arrow1").style =
                                          "visibility:visible; position:absolute; left:632px; top:174px; height:40px; z-index:10;";
                                        document.getElementById(
                                          "arrow1"
                                        ).style.WebkitTransform = "rotate(-90deg)";
                                        document.getElementById(
                                          "arrow1"
                                        ).style.msTransform = "rotate(-90deg)";
                                        document.getElementById("arrow1").style.transform =
                                          "rotate(-90deg)";
                                        setTimeout(function () {
                                          document.getElementById("6-6").onclick =
                                            function () {
                                              myStopFunction();
                                              document.getElementById("6-6").onclick = "";
                                              document.getElementById(
                                                "6-7"
                                              ).style.visibility = "visible";
                                              document.getElementById(
                                                "6-7"
                                              ).style.transformOrigin = "33% 54%";
                                              document.getElementById(
                                                "6-7"
                                              ).style.animation = "moveblade 2s 1 forwards";
                                              setTimeout(function () {
                                                document.getElementById(
                                                  "6-6a"
                                                ).style.visibility = "visible";
                                                document.getElementById(
                                                  "6-7"
                                                ).style.visibility = "hidden";
                                                document.getElementById(
                                                  "6-7a"
                                                ).style.visibility = "visible";
                                                document.getElementById(
                                                  "6-7a"
                                                ).style.transformOrigin = "33% 54%";
                                                document.getElementById(
                                                  "6-7a"
                                                ).style.animation =
                                                  "moveblade1 2s 1 forwards";
                                                setTimeout(function () {
                                                  document.getElementById(
                                                    "6-6b"
                                                  ).style.visibility = "visible";
                                                  document.getElementById(
                                                    "6-7a"
                                                  ).style.visibility = "hidden";
                                                  document.getElementById(
                                                    "6-7b"
                                                  ).style.visibility = "visible";
                                                  document.getElementById(
                                                    "6-7b"
                                                  ).style.transformOrigin = "33% 54%";
                                                  document.getElementById(
                                                    "6-7b"
                                                  ).style.animation =
                                                    "moveblade2 2s 1 forwards";
                                                  setTimeout(function () {
                                                    document.getElementById(
                                                      "6-6c"
                                                    ).style.visibility = "visible";
                                                    document.getElementById(
                                                      "6-7b"
                                                    ).style.visibility = "hidden";
                                                    document.getElementById(
                                                      "6-7c"
                                                    ).style.visibility = "visible";
                                                    document.getElementById(
                                                      "6-6"
                                                    ).style.visibility = "hidden";
                                                    document.getElementById(
                                                      "6-7c"
                                                    ).style.transformOrigin = "33% 54%";
                                                    document.getElementById(
                                                      "6-7c"
                                                    ).style.animation =
                                                      "moveblade3 2s 1 forwards";
                                                    setTimeout(function () {
                                                      document.getElementById(
                                                        "6-6d"
                                                      ).style.visibility = "visible";
                                                      document.getElementById(
                                                        "6-7c"
                                                      ).style.visibility = "hidden";
            
                                                      document.getElementById(
                                                        "nextButton"
                                                      ).style.visibility = "visible";
                                                    }, 2000);
                                                  }, 2000);
                                                }, 2000);
                                              }, 2000);
                                            };
                                        }, 500);
                                        // document.getElementById("nextButton").style.visibility =
                                        // "visible";
                                      }, 7000);
                                    };
                                }, 500);
                              };
                          }, 500);
                        }, 3000);
                      };
                    }, 500);
                  }, 2000);
                };
              }, 500);
            };
          }, 500);
        };
      }, 500);
    };
  } else if (simsubscreennum == 5) {
    document.getElementById("6-5").style.visibility = "hidden";
    document.getElementById("6-6a").style.visibility = "hidden";
    document.getElementById("6-6b").style.visibility = "hidden";
    document.getElementById("6-6c").style.visibility = "hidden";
    document.getElementById("6-6d").style.visibility = "hidden";
    document.getElementById("6-2").style.visibility = "hidden";
    document.getElementById("6-3").style.visibility = "hidden";
    document.getElementById("5-2").style.visibility = "hidden";
    setTimeout(function () {
      // myStopFunction();
      document.getElementById("7-1").style.visibility = "hidden";
      document.getElementById("7-2").style.visibility = "visible";
      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible; position:absolute; left:159px; top:176px; height:40px; z-index:10;";
      document.getElementById("arrow1").style.WebkitTransform =
        "rotate(270deg)";
      document.getElementById("arrow1").style.msTransform = "rotate(270deg)";
      document.getElementById("arrow1").style.transform = "rotate(270deg)";

      setTimeout(function () {
        document.getElementById("7-2").onclick = function () {
          myStopFunction();
          document.getElementById("7-2").onclick = "";
          document.getElementById("7-3").style.visibility = "visible";
          document.getElementById("7-2").style.animation =
            "batterymove 2s forwards";
          setTimeout(function () {
            document.getElementById("7-4").style.visibility = "visible";
            document.getElementById("7-3").style.visibility = "hidden";
            document.getElementById("7-2").style.visibility = "hidden";
            document.getElementById("nextButton").style.visibility = "visible";
          }, 2000);
        };
      }, 500);
    }, 1000);
  } else if (simsubscreennum == 6) {
    document.getElementById("7-4").style.visibility = "hidden";
    document.getElementById("7-2").style.visibility = "hidden";
    //document.getElementById("7-3").style.visibility = "hidden";
    document.getElementById("5-6").style.visibility = "visible";
    document.getElementById("5-6").onclick = function () {
      document.getElementById("5-6").style.visibility = "hidden";
      document.getElementById("divi1").style.visibility = "hidden";
      document.getElementById("dial").style.visibility = "hidden";

      myInt = setInterval(function () {
        animatearrow();
      }, 500);
      document.getElementById("arrow1").style =
        "visibility:visible; position:absolute; left:390px; top:216px; height:40px; z-index:10;";
      document.getElementById("arrow1").style.WebkitTransform =
        "rotate(-90deg)";
      document.getElementById("arrow1").style.msTransform = "rotate(-90deg)";
      document.getElementById("arrow1").style.transform = "rotate(-90deg)";
      setTimeout(function () {
        document.getElementById("5-1").onclick = function () {
          myStopFunction();
          document.getElementById("5-1").onclick = "";

          // document.getElementById("5-1").style.animation =
          //   "openlan 1s forwards";
          document.getElementById("5-1").style.visibility = "hidden";
          document.getElementById("5-2").style.animation =
            "openland 1s forwards";
          document.getElementById("5-2").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("5-2").style.animation =
              "openland2 1s forwards";
            setTimeout(function () {
              document.getElementById("5-3").style.visibility = "visible";
              document.getElementById("5-2").style.visibility = "hidden";
              setTimeout(function () {
                document.getElementById("5-4").style.visibility = "visible";
                document.getElementById("5-4").style.transform =
                  "rotateX(60deg)";
                document.getElementById("5-3").style.visibility = "hidden";
                document.getElementById("5-5").style.visibility = "visible";
                myInt = setInterval(function () {
                  animatearrow();
                }, 500);
                document.getElementById("arrow1").style =
                  "visibility:visible; position:absolute; left:175px; top:272px; height:40px; z-index:10;";
                document.getElementById("arrow1").style.WebkitTransform =
                  "rotate(270deg)";
                document.getElementById("arrow1").style.msTransform =
                  "rotate(270deg)";
                document.getElementById("arrow1").style.transform =
                  "rotate(270deg)";
                setTimeout(function () {
                  document.getElementById("5-5").onclick = function () {
                    myStopFunction();
                    document.getElementById("5-5").onclick = "";
                    document.getElementById("5-5").style.animation =
                      "dronemove2 2s forwards";
                    setTimeout(function () {
                      document.getElementById("5-5").style.animation =
                        "moveleft 1s forwards";
                      document.getElementById("5-4").style.animation =
                        "moveleft1 1s forwards";
                      setTimeout(function () {
                        myInt = setInterval(function () {
                          animatearrow();
                        }, 500);
                        document.getElementById("arrow1").style =
                          "visibility:visible; position:absolute; left:398px; top:248px; height:40px; z-index:10;";
                        document.getElementById(
                          "arrow1"
                        ).style.WebkitTransform = "rotate(270deg)";
                        document.getElementById("arrow1").style.msTransform =
                          "rotate(270deg)";
                        document.getElementById("arrow1").style.transform =
                          "rotate(270deg)";
                        document.getElementById("5-5").onclick = function () {
                          myStopFunction();
                          document.getElementById("5-5").onclick = "";
                          document.getElementById("5-5").style.animation =
                            "droneup 3s forwards";
                          document.getElementById("5-4").style.animation =
                            "landup1 2s forwards";
                          setTimeout(function () {
                            document.getElementById("5-4-1").style.visibility =
                              "visible";
                            document.getElementById("5-4-2").style.visibility =
                              "visible";
                            setTimeout(function () {
                              document.getElementById(
                                "divi7"
                              ).style.visibility = "visible";
                              document.getElementById(
                                "dialog7"
                              ).style.visibility = "visible";

                              document.getElementById("5-6-7").onclick =
                                function () {
                                  document.getElementById("5-6-7").onclick = "";
                                  document.getElementById(
                                    "dialog7"
                                  ).style.visibility = "hidden";
                                  document.getElementById(
                                    "divi7"
                                  ).style.visibility = "hidden";
                                  document.getElementById(
                                    "5-4-3"
                                  ).style.visibility = "visible";

                                  // setTimeout(function () {
                                  // document.getElementById("5-6-7").onclick = "";
                                  // document.getElementById(
                                  //   "5-4-3"
                                  // ).style.visibility = "visible";

                                  document.getElementById(
                                    "5-4-3"
                                  ).style.animation = "capture1 1s forwards";
                                  setTimeout(function () {
                                    document.getElementById(
                                      "nextButton"
                                    ).style.visibility = "visible";
                                  }, 500);
                                  // }, 1000);
                                };
                            }, 500);
                          }, 3000);
                        };
                      }, 1000);
                    }, 2000);
                  };
                }, 500);
              }, 1000);
            }, 500);
          }, 500);
        };
      });
    };
  } else if (simsubscreennum == 7) {
    document.getElementById("5-4").style.visibility = "hidden";
    document.getElementById("5-4-1").style.visibility = "hidden";
    document.getElementById("5-4-2").style.visibility = "hidden";
    document.getElementById("5-4-3").style.visibility = "hidden";
    document.getElementById("5-5").style.visibility = "hidden";
    document.getElementById("7-1-1").style.visibility = "visible";
    document.getElementById("plan").disabled = false;

    document.getElementById("7-1-3").style.visibility = "visible";

    myInt = setInterval(function () {
      animatearrow();
    }, 500);
    document.getElementById("arrow1").style =
      "visibility:visible; position:absolute; left:376px; top:514px; height:40px; z-index:10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
    document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
    document.getElementById("arrow1").style.transform = "rotate(0deg)";
    setTimeout(function () {
      document.getElementById("7-1-3").onclick = function () {
        myStopFunction();
        document.getElementById("7-1-3").onclick = "";
        document.getElementById("7-1-3").style.animation =
          "handmove 1s forwards";
        setTimeout(function () {
          document.getElementById("7-1-3").style.visibility = "hidden";
          document.getElementById("7-1-1").style.animation =
            "zoomin 1s forwards";
          document.getElementById("7-1-4").style.animation =
            "zoomin1 1s forwards";
          document.getElementById("7-1-4").style.visibility = "visible";

          setTimeout(function () {
            document.getElementById("tab").style.visibility = "visible";
            document.getElementById("7-1-2").style.visibility = "visible";
            document.getElementById("7-1-7").style.visibility = "visible";
            document.getElementById("7-1-8").style.visibility = "visible";
            document.getElementById("tab2").style.visibility = "visible";
            document.getElementById("plan").onclick = function () {
              document.getElementById("fh").disabled = false;
              //change1();
              document.getElementById("7-a").onclick = function () {
                //showArea();
                let value = document.getElementById("fh").value;
                if (document.getElementById("7-a").checked) {
                  document.getElementById("7-aa").style.visibility = "visible";

                  switch (value) {
                    case "45":
                      acre();

                      document.getElementById("7-1-2").style.visibility =
                        "hidden";
                      document.getElementById("7-1-5").style.visibility =
                        "visible";
                      document.getElementById("7-1-9").style.visibility =
                        "hidden";
                      // document.getElementById("7-1-10").style.visibility =
                      // "hidden";
                      document.getElementById("7-1-66").style.visibility =
                        "visible";
                      document.getElementById("7-1-7a").style.visibility =
                        "visible";
                      document.getElementById("7-1-7a").style.visibility =
                        "visible";
                      document.getElementById("7-1-6").style.visibility =
                        "hidden";
                      document.getElementById("sub1").disabled = false;
                      document.getElementById("sub1").onclick = function () {
                        document.getElementById("7-1-66").style.animation =
                          "movearrow 30s forwards";
                        move();
                        document.getElementById("sub1").disabled = true;
                        document.getElementById("fh").disabled = true;
                        document.getElementById("num-1").style.visibility =
                          "visible";
                        document.getElementById("num-2").style.visibility =
                          "visible";
                        document.getElementById(
                          "handleCount"
                        ).style.visibility = "visible";

                        document.getElementById("num-3").style.visibility =
                          "visible";
                        setTimeout(function () {
                          document.getElementById("dialo").style.visibility =
                            "visible";
                          document.getElementById("fh").disabled = false;
                          // var u = document.getElementById("upload");
                          // u.disabled = false;
                          document.getElementById("upload").disabled = false;
                          document.getElementById("fh").disabled = true;

                          document.getElementById("upload").onclick =
                            function () {
                              if (document.getElementById("upload").checked) {
                                document.getElementById(
                                  "7-1-11"
                                ).style.visibility = "visible";
                                document.getElementById("plan").disabled = true;
                                document.getElementById("sub1").disabled = true;
                                document.getElementById(
                                  "out1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "output1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "10-4"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "7-1-2"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "7-1-5"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "10-1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "7-1-66"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "7-1-7a"
                                ).style.visibility = "hidden";
                                document.getElementById("10-1").onclick =
                                  function () {
                                    // document.getElementById(
                                    //   "10-2"
                                    // ).style.animation = "spin 2s forwards";
                                    document.getElementById(
                                      "10-1"
                                    ).style.visibility = "hidden";
                                    document.getElementById(
                                      "7-1-11"
                                    ).style.visibility = "hidden";
                                    document.getElementById(
                                      "10-4"
                                    ).style.visibility = "hidden";
                                    document.getElementById(
                                      "10-2"
                                    ).style.visibility = "visible";
                                    move3();

                                    setTimeout(function () {
                                      document.getElementById(
                                        "l1"
                                      ).style.visibility = "hidden";
                                      document.getElementById(
                                        "up1"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "fh"
                                      ).disabled = false;
                                      document.getElementById(
                                        "next1"
                                      ).style.visibility = "visible";
                                      document.getElementById("next1").onclick =
                                        function () {
                                          document.getElementById(
                                            "form1"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "tab3"
                                          ).style.visibility = "visible";
                                          document.getElementById(
                                            "7-aa"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "sub1"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "handleCount"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "num-3"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "10-2"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "up1"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "7-1-4"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "tab"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "7-1-7"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "7-1-8"
                                          ).style.visibility = "hidden";

                                          document.getElementById(
                                            "8-1-1"
                                          ).style.visibility = "visible";
                                          // document.getElementById(
                                          //   "tab2"
                                          // ).style.visibility = "visible";
                                          document.getElementById(
                                            "8-1-5"
                                          ).style.visibility = "visible";
                                        };
                                    }, 2000);
                                  };
                              } else {
                                document.getElementById(
                                  "plan"
                                ).disabled = false;
                                document.getElementById(
                                  "7-1-11"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "up1"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "10-2"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "handleCount"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "out1"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "output1"
                                ).style.visibility = "hidden";
                              }
                            };
                        }, 30000);
                      };
                      break;
                    case "55":
                      document.getElementById("plan").disabled = false;
                      document.getElementById("nextButton").style.visibility =
                        "hidden";
                      document.getElementById("7-1-66").style.visibility =
                        "hidden";
                      document.getElementById("out1").style.visibility =
                        "hidden";
                      document.getElementById("output1").style.visibility =
                        "hidden";
                      document.getElementById("7-1-7a").style.visibility =
                        "hidden";
                      document.getElementById("up1").style.visibility =
                        "hidden";
                      document.getElementById("10-2").style.visibility =
                        "hidden";
                      document.getElementById("10-1").style.visibility =
                        "hidden";
                      document.getElementById("7-1-5").style.visibility =
                        "hidden";
                      document.getElementById("7-1-2").style.visibility =
                        "hidden";
                      document.getElementById("7-1-9").style.visibility =
                        "visible";
                      // document.getElementById("7-1-10").style.visibility =
                      // "hidden";
                      document.getElementById("7-1-11").style.visibility =
                        "hidden";
                      document.getElementById("7-1-6").style.visibility =
                        "visible";
                      document.getElementById("7-1-7b").style.visibility =
                        "visible";
                      document.getElementById("next1").style.visibility =
                        "hidden";
                      document.getElementById("sub1").disabled = false;
                      document.getElementById("sub1").onclick = function () {
                        document.getElementById("7-1-6").style.animation =
                          "movearrow2 30s forwards";
                        move1();
                        document.getElementById("sub1").disabled = true;
                        document.getElementById("fh").disabled = true;
                        document.getElementById("num-1").style.visibility =
                          "visible";
                        document.getElementById("num-2").style.visibility =
                          "visible";
                        document.getElementById(
                          "handleCount"
                        ).style.visibility = "visible";
                        document.getElementById("num-3").style.visibility =
                          "visible";
                        setTimeout(function () {
                          document.getElementById("dialo1").style.visibility =
                            "visible";
                          document.getElementById("fh").disabled = true;
                          document.getElementById("upload").disabled = false;
                          document.getElementById("upload").onclick =
                            function () {
                              if (document.getElementById("upload").checked) {
                                document.getElementById(
                                  "7-1-11"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "out1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "output1"
                                ).style.visibility = "visible";
                                document.getElementById("plan").disabled = true;
                                document.getElementById(
                                  "out1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "output1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "10-4"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "7-1-9"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "7-1-5"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "10-1"
                                ).style.visibility = "visible";
                                document.getElementById(
                                  "7-1-6"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "7-1-7b"
                                ).style.visibility = "hidden";

                                document.getElementById("10-1").onclick =
                                  function () {
                                    document.getElementById(
                                      "10-1"
                                    ).style.visibility = "hidden";
                                    document.getElementById(
                                      "7-1-11"
                                    ).style.visibility = "hidden";
                                    document.getElementById(
                                      "10-4"
                                    ).style.visibility = "hidden";
                                    document.getElementById(
                                      "10-2"
                                    ).style.visibility = "visible";
                                    move3();

                                    setTimeout(function () {
                                      document.getElementById(
                                        "l1"
                                      ).style.visibility = "hidden";
                                      document.getElementById(
                                        "up1"
                                      ).style.visibility = "visible";
                                      document.getElementById(
                                        "fh"
                                      ).disabled = true;
                                      document.getElementById(
                                        "next1"
                                      ).style.visibility = "visible";
                                      document.getElementById("next1").onclick =
                                        function () {
                                          document.getElementById(
                                            "form1"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "tab3"
                                          ).style.visibility = "visible";
                                          document.getElementById(
                                            "7-aa"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "sub1"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "handleCount"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "num-3"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "10-2"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "up1"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "7-1-4"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "tab"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "7-1-7"
                                          ).style.visibility = "hidden";
                                          document.getElementById(
                                            "7-1-8"
                                          ).style.visibility = "hidden";

                                          document.getElementById(
                                            "8-1-1"
                                          ).style.visibility = "visible";
                                          // document.getElementById(
                                          //   "tab2"
                                          // ).style.visibility = "visible";
                                          document.getElementById(
                                            "8-1-5"
                                          ).style.visibility = "visible";
                                        };
                                    }, 2000);
                                  };
                              } else {
                                document.getElementById(
                                  "plan"
                                ).disabled = false;
                                document.getElementById(
                                  "7-1-11"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "up1"
                                ).style.visibility = "hidden";
                                document.getElementById(
                                  "10-2"
                                ).style.visibility = "hidden";
                              }
                            };
                        }, 30000);
                      };

                      break;
                  }
                } else {
                  document.getElementById("7-1-2").style.visibility = "visible";
                  // document.getElementById("7-1-10").style.visibility = "hidden";
                  document.getElementById("7-1-9").style.visibility = "hidden";
                  document.getElementById("7-1-5").style.visibility = "hidden";
                  document.getElementById("7-1-6").style.visibility = "hidden";
                  document.getElementById("7-1-7b").style.visibility = "hidden";
                  document.getElementById("up1").style.visibility = "hidden";
                  document.getElementById("10-2").style.visibility = "hidden";
                  document.getElementById("load").style.visibility = "hidden";
                }

                setTimeout(function () {
                  // document.getElementById("7-1-2").style.visibility = "hidden";
                  // document.getElementById("7-1-5").style.visibility = "visible";
                  // document.getElementById("sub1").onclick = function () {
                  //   document.getElementById("sub1").onclick = "";
                  //   // document.getElementById("p7-1").style.visibility = "visible";
                  //   document.getElementById("7-1-6").style.animation =
                  //     "movearrow 30s forwards";
                  //   setTimeout(function () {}, 30000);
                  // };
                }, 500);
              };
            };
          }, 1000);
        }, 1500);
      };
    }, 500);
  } else if (simsubscreennum == 8) {
    document.getElementById("8-1-1").style.visibility = "hidden";
    document.getElementById("8-1-5").style.visibility = "hidden";
    document.getElementById("7-aa").style.visibility = "hidden";
    document.getElementById("tab3").style.visibility = "hidden";
    document.getElementById("num-2").style.visibility = "hidden";
    document.getElementById("num-1").style.visibility = "hidden";
    document.getElementById("7-1-5").style.visibility = "hidden";
    document.getElementById("7-1-9").style.visibility = "hidden";
    // document.getElementById("7-1-10").style.visibility = "hidden";
    document.getElementById("8-1-5").style.visibility = "hidden";
    document.getElementById("8-1-4").style.visibility = "hidden";
    document.getElementById("8-1-44").style.visibility = "hidden";
    document.getElementById("8-1-3").style.visibility = "hidden";
    document.getElementById("8-1-2").style.visibility = "hidden";
    document.getElementById("out1").style.visibility = "hidden";
    document.getElementById("output1").style.visibility = "hidden";
    document.getElementById("dialo").style.visibility = "hidden";
    document.getElementById("grad1").style.visibility = "hidden";
    document.getElementById("grad2").style.visibility = "hidden";
    document.getElementById("range2").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("range1").style.visibility = "hidden";
    document.getElementById("grad3").style.visibility = "hidden";
    document.getElementById("range3").style.visibility = "hidden";
  }
}

function generateQuestion(
  qObject,
  qn,
  opt,
  ansKey,
  fn,
  dleft,
  dright,
  dwidth,
  dheight
) {
  document.getElementById("question-div").style.left = dleft + "px";
  document.getElementById("question-div").style.top = dright + "px";
  document.getElementById("question-div").style.width = dwidth + "px";
  document.getElementById("question-div").style.height = dheight + "px";
  qObject.setOptions(opt);
  qObject.setAns(ansKey);
  qObject.frameQuestions(qn);
  qObject.setCallBack(fn);
}
function screen1Proceed() {
  document.getElementById("nextButton").style.visibility = "visible";
}
function screen2Proceed() {
  myInt = setInterval(function () {
    animatearrow();
  }, 500);
  document.getElementById("arrow1").style =
    "visibility:visible; position:absolute; left:370px; top:345px; height:40px; z-index:10;";
  document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
  document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
  document.getElementById("arrow1").style.transform = "rotate(0deg)";
  //   setTimeout(function(){
  // 	document.getElementById("nextButton").style.visibility="visible";
  //   },1000);
  //myInt = setInterval(function(){ animatearrow(); }, 500);
  //document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:288px; top:400px; height: 30px; z-index: 10;";
  //document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)";

  document.getElementById("ps-1").onclick = function () {
    myStopFunction();
    document.getElementById("ps-1").onclick = "";
    document.getElementById("ps-1").style.animation =
      "rotate_animation 2s forwards";
    document.getElementById("1-6").style.visibility = "visible";
    //document.getElementById("hand").style.animation = "moveHand 1s forwards";
    document.getElementById("ps-1").onclick = "";

    setTimeout(function () {
      // myStopFunction();
      document.getElementById("ps-1").style.visibility = "hidden";
      document.getElementById("pk").style.visibility = "hidden";
      document.getElementById("pk3").style.visibility = "visible";
      document.getElementById("1-7").style.visibility = "visible";
      setTimeout(function () {
        // myInt = setInterval(function () {
        //   animatearrow();
        // }, 500);
        // document.getElementById("arrow1").style =
        //   "visibility:visible; position:absolute; left:366px; top:237px; height:40px; z-index:10;";
        // document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)";
        // document.getElementById("arrow1").style.msTransform = "rotate(0deg)";
        // document.getElementById("arrow1").style.transform = "rotate(0deg)";
        // document.getElementById("1-7").onclick = function () {
        //   myStopFunction();
        //   document.getElementById("1-7").onclick = "";

        document.getElementById("hand").style.visibility = "visible";
      }, 500);
      document.getElementById("hand").style.animation = "moveHand 2s forwards";
      setTimeout(function () {
        document.getElementById("1-7").style.visibility = "hidden";
        document.getElementById("1-6").style.visibility = "visible";
        setTimeout(function () {
          document.getElementById("1-6").style.animation = "moveup 2s forwards";

          document.getElementById("hand").style.visibility = "hidden";
          setTimeout(function () {
            document.getElementById("3-1").style.visibility = "visible";
            document.getElementById("1-6").style.visibility = "hidden";
            document.getElementById("pk").style.visibility = "hidden";
            document.getElementById("pk3").style.visibility = "hidden";
            document.getElementById("hand").style.visibility = "hidden";
            document.getElementById("1-2").style.visibility = "hidden";

            myInt = setInterval(function () {
              animatearrow();
            }, 500);
            document.getElementById("arrow1").style =
              "visibility:visible; position:absolute; left:508px; top:250px; height: 30px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform =
              "rotate(180deg)";
            document.getElementById("arrow1").style.transform =
              "rotate(180deg)";
            document.getElementById("3-2").style.visibility = "visible";
            document.getElementById("3-2").onclick = function () {
              myStopFunction();
              document.getElementById("3-2").onclick = "";
              document.getElementById("3-1").style.animation =
                "zoomInDrone 1s forwards";
              document.getElementById("3-2").style.animation =
                "moveIpad 1s forwards";
              setTimeout(function () {
                document.getElementById("4-1").style.visibility = "visible";

                document.getElementById("3-2").style.visibility = "hidden";
                document.getElementById("3-1").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility =
                  "visible";
              }, 500);
            };
          }, 2000);
        }, 500);
      }, 1000);
    }, 1000);
    //};

    //document.getElementById("hand").style.visibility = "visible";
    // document.getElementById("nextButton").style.visibility = "visible";
  };

  //document.getElementById("nextButton").style.visibility = "visible";
}
function hidedial() {
  document.getElementById("dial").style.visibility = "hidden";
  document.getElementById("divi1").style.visibility = "hidden";
}
function hidedial1() {
  document.getElementById("dialo").style.visibility = "hidden";
  document.getElementById("divig1").style.visibility = "hidden";
}
function hidedialog() {
  document.getElementById("dialog").style.visibility = "hidden";
  document.getElementById("divp").style.visibility = "hidden";
}
function hidedialog1() {
  document.getElementById("dialog1").style.visibility = "hidden";
  document.getElementById("divp1").style.visibility = "hidden";
}
function hidedialog4() {
  document.getElementById("dialog3").style.visibility = "hidden";
  document.getElementById("divp2").style.visibility = "hidden";
}
function hidedial2() {
  document.getElementById("dialo1").style.visibility = "hidden";
  document.getElementById("divig2").style.visibility = "hidden";
}
function hidedial3() {
  document.getElementById("dialo2").style.visibility = "hidden";
  document.getElementById("divig3").style.visibility = "hidden";
}
function hidedial7() {
  document.getElementById("dialog7").style.visibility = "hidden";
  document.getElementById("divi7").style.visibility = "hidden";
  document.getElementById("5-4-3").style.visibility = "visible";
}
var y;
function handleFlightSelection(e) {
  //console.log(e.value)
  let value = e.value;
  let resolution;
  let fightTime;
  let images;
  document.getElementById("7-a").disabled = false;
  document.getElementById("7-a").checked = false;
  document.getElementById("upload").disabled = true;
  document.getElementById("upload").checked = false;
  switch (value) {
    case "45":
      resolution = "2.4";
      fightTime = "8.18";
      images = "912";
      // if (showArea) {
      //   document.getElementById("7-1-5").style.visibility = "visible";
      //   document.getElementById("7-1-10").style.visibility = "hidden";
      //   document.getElementById("7-1-9").style.visibility = "hidden";
      // }

      break;
    case "55":
      resolution = "2.9";
      fightTime = "6.22";
      images = "630";
      // document.getElementById("7-1-5").style.visibility = "hidden";
      // document.getElementById("7-1-10").style.visibility = "hidden";
      // document.getElementById("7-1-9").style.visibility = "visible";
      break;
  }

  document.getElementById("demo").innerHTML =
    "Resolution (cm/px):  " + resolution;
  document.getElementById("demo1").innerHTML =
    " Flight Time (min):  " + fightTime;
  document.getElementById("demo2").innerHTML = " Images: " + images;
}

function change1() {
  var checkBox = document.getElementById("Ipad");
  var b = document.getElementById("sub1");
  if (checkBox.checked == true) {
    b.style.visibility = "visible";
  } else {
    b.style.visibility = "hidden";
  }
}

// function showArea() {

// }
function up() {
  if (document.getElementById("upload").checked) {
    document.getElementById("7-1-11").visibility = "visible";
  }
}

var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 32);

    function frame() {
      if (width >= 912) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width;
      }
    }
  }
}
function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 38);

    function frame() {
      if (width >= 630) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width;
      }
    }
  }
}
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 90);

    function frame() {
      if (width >= 286) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width;
      }
    }
  }
}
function move3() {
  document.getElementById("l1").style.visibility = "visible";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("load");
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function acre() {
  if (document.getElementById("7-a").checked == false) {
    document.getElementById("7-aa").style.visibility = "hidden";
  } else {
    document.getElementById("7-aa").style.visibility = "visible";
  }
}

function check_value() {
  document.getElementById("8-1-5").style.visibility = "visible";
  switch (document.test.field.value) {
    case "one":
      document.getElementById("8-1-2").style.visibility = "visible";
      document.getElementById("8-1-3").style.visibility = "hidden";
      document.getElementById("8-1-4").style.visibility = "hidden";
      document.getElementById("8-1-44").style.visibility = "hidden";
      document.getElementById("range1").style.visibility = "hidden";
      document.getElementById("range2").style.visibility = "hidden";
      document.getElementById("grad1").style.visibility = "hidden";
      document.getElementById("grad2").style.visibility = "hidden";
      document.getElementById("grad3").style.visibility = "hidden";
      document.getElementById("range3").style.visibility = "hidden";
      break;

    case "two":
      document.getElementById("8-1-2").style.visibility = "hidden";
      document.getElementById("8-1-3").style.visibility = "visible";
      document.getElementById("8-1-4").style.visibility = "hidden";
      document.getElementById("8-1-44").style.visibility = "hidden";
      document.getElementById("grad1").style.visibility = "visible";
      document.getElementById("grad2").style.visibility = "hidden";
      document.getElementById("grad3").style.visibility = "hidden";
      document.getElementById("range3").style.visibility = "hidden";
      document.getElementById("range1").style.visibility = "visible";
      document.getElementById("range2").style.visibility = "hidden";
      // document.getElementById("ttp1").style.visibility = "visible";
      // document.getElementById("ttp2").style.visibility = "hidden";
      // document.getElementById("ttp3").style.visibility = "hidden";
      break;

    case "three":
      document.getElementById("8-1-2").style.visibility = "hidden";
      document.getElementById("grad2").style.visibility = "visible";
      document.getElementById("8-1-3").style.visibility = "hidden";
      document.getElementById("8-1-4").style.visibility = "visible";
      document.getElementById("8-1-44").style.visibility = "hidden";
      document.getElementById("grad1").style.visibility = "hidden";
      document.getElementById("range1").style.visibility = "hidden";
      document.getElementById("grad3").style.visibility = "hidden";
      document.getElementById("range3").style.visibility = "hidden";
      document.getElementById("range2").style.visibility = "visible";
      // document.getElementById("ttp1").style.visibility = "hidden";
      // document.getElementById("ttp2").style.visibility = "visible";
      // document.getElementById("ttp3").style.visibility = "hidden";
      // document.getElementById("nextButton").style.visibility = "visible";
      break;
    case "four":
      document.getElementById("8-1-2").style.visibility = "hidden";
      document.getElementById("grad2").style.visibility = "hidden";
      document.getElementById("8-1-3").style.visibility = "hidden";
      document.getElementById("8-1-44").style.visibility = "visible";
      document.getElementById("grad1").style.visibility = "hidden";
      document.getElementById("range1").style.visibility = "hidden";
      document.getElementById("range2").style.visibility = "hidden";
      document.getElementById("grad3").style.visibility = "visible";
      document.getElementById("range3").style.visibility = "visible";
      document.getElementById("nextButton").style.visibility = "visible";
      // document.getElementById("ttp1").style.visibility = "hidden";
      // document.getElementById("ttp2").style.visibility = "hidden";
      // document.getElementById("ttp3").style.visibility = "visible";
      break;
  }
}

function checkClicked(evt) {
  checkCount += evt.target.checked == true ? 1 : -1;
  document.getElementById("sub1").style.visibility =
    checkCount == 4 ? "visible" : "hidden";
}

function contents() {
  document.getElementById("checker1").style.visibility = "visible";
}
function res() {
  document.getElementById("grad1").style.visibility = "visible";
}
function res1() {
  document.getElementById("grad2").style.visibility = "visible";
}
function res2() {
  document.getElementById("grad3").style.visibility = "visible";
}
const txt1 = document.getElementById("tbuser");
const bts1 = document.getElementById("7-a");
const out1 = document.getElementById("output1");
function setTitle(evt) {
  document.getElementById("output1").innerText = evt.target.value;
}
// bts1.addEventListener("click", name1);
// function name1() {
//   out1.innerHTML = txt1.value;
// }

function showToolTip() {
  document.getElementById("ttp1").style.visibility = "visible";
}
function hideToolTip() {
  document.getElementById("ttp1").style.visibility = "hidden";
}

function showToolTip1() {
  document.getElementById("ttp2").style.visibility = "visible";
}
function hideToolTip1() {
  document.getElementById("ttp2").style.visibility = "hidden";
}

function showToolTip2() {
  document.getElementById("ttp3").style.visibility = "visible";
}
function hideToolTip2() {
  document.getElementById("ttp3").style.visibility = "hidden";
}
