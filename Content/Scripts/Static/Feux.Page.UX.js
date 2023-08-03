Feux.Page = {
    UX: {
        Actions: {
            init: function () {


                if (document.querySelectorAll("[data-content-id]").length) {
                    var tabBtns = document.querySelectorAll("[data-content-id]");

                    for (const btn of tabBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();


                            var tabContentId = btn.getAttribute("data-content-id");
                            var tabContent = document.querySelector('[tab-content-id="' + tabContentId + '"]');
                            var tabContentWrp = tabContent.querySelector('.c-tab-wrapper');
                            var tabContentWrpHeight = tabContentWrp.clientHeight;

                            if (!sender.classList.contains("on")) {

                                var tabContents = document.querySelectorAll("[data-content-id]");
                                for (var i = 0; i < tabContents.length; i++) {
                                    if (tabContents[i].classList.contains("on")) {
                                        tabContents[i].classList.remove("on")
                                        var tabContentIdOn = tabContents[i].getAttribute("data-content-id");
                                        var tabContentOn = document.querySelector('[tab-content-id="' + tabContentIdOn + '"]');
                                        var tabContentWrpOn = tabContentOn.querySelector('.c-tab-wrapper');
                                        tabContentOn.style.height = 0;
                                        tabContentOn.classList.remove("active");
                                        tabContentOn.removeAttribute("style");


                                        break;
                                    }
                                }

                                var totalHeight = tabContentWrpHeight + "px";
                                tabContent.style.height = totalHeight;
                                tabContent.classList.add("active");
                                sender.classList.add("on");


                            }
                            return;

                        });
                    }
                }
               

                if (document.querySelectorAll("[trigger-desc-content-id]").length) {
                    var tabBtns = document.querySelectorAll("[trigger-desc-content-id]");

                    for (const btn of tabBtns) {
                        btn.addEventListener("click", function (event) {
                            event.preventDefault();
                            var sender = event.target;
                            var tabContentId = sender.getAttribute("trigger-desc-content-id");
                            document.querySelector('[tabber-content-id="' + tabContentId + '"]').click();
                        })
                    }

                }

                if (document.querySelectorAll("[tabber-content-id]").length) {
                    var tabBtns = document.querySelectorAll("[tabber-content-id]");

                    for (const btn of tabBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();

                            

                            var tabContentId = btn.getAttribute("tabber-content-id");
                            var tabContent = document.querySelector('[content-id="' + tabContentId + '"]');

                            if (!sender.classList.contains("on")) {

                                var tabContents = document.querySelectorAll("[tabber-content-id]");
                                for (var i = 0; i < tabContents.length; i++) {
                                    if (tabContents[i].classList.contains("on")) {
                                        tabContents[i].classList.remove("on")
                                        var tabContentIdOn = tabContents[i].getAttribute("tabber-content-id");
                                        var tabContentOn = document.querySelector('[content-id="' + tabContentIdOn + '"]');
                                        tabContentOn.classList.remove("active");
                                        break;
                                    }
                                }

                                tabContent.classList.add("active");
                                sender.classList.add("on");


                            }
                            return;

                        });
                    }
                }
                if (document.querySelectorAll(".tab-content .close-btn").length) {
                    var resBtns = document.querySelectorAll(".tab-content .close-btn");
                    
                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();


                            var alertContainer = document.querySelector(".tab-content.active");
                            document.querySelector("[tabber-content-id].on").classList.remove("on");
                            alertContainer.classList.remove("active");


                        });
                    }
                }
                if (document.querySelectorAll(".make-reservation-js").length) {
                    var resBtns = document.querySelectorAll(".make-reservation-js");

                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();

                            var alertContainer = document.querySelector("#column-03-container");
                            alertContainer.classList.add("on");


                        });
                    }
                }
                if (document.querySelectorAll(".alert-modal .close-icon").length) {
                    var resBtns = document.querySelectorAll(".alert-modal .close-icon");

                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();


                            var alertContainer = document.querySelector("#column-03-container");
                            alertContainer.classList.remove("on");


                        });
                    }
                }

                

                

                if (document.querySelectorAll(".change-language-container").length) {

                    var resBtns = document.querySelectorAll(".change-language-container span")


                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();

                            document.querySelector(".change-language span").innerHTML = sender.innerHTML;
                            document.querySelector(".change-language").classList.remove("on");


                        });
                    }

                }

                if (document.querySelectorAll(".change-language").length) {

                    var resBtns = document.querySelectorAll(".change-language")
                  

                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();


                            if (sender.classList.contains("on")) {
                                sender.classList.remove("on");
                            } else {
                                sender.classList.add("on");
                            }


                        });
                    }

                }


                if (document.querySelectorAll(".change-currency").length) {

                    var resBtns = document.querySelectorAll(".change-currency")


                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();


                            if (sender.classList.contains("on")) {
                                sender.classList.remove("on");
                            } else {
                                sender.classList.add("on");
                            }


                        });
                    }

                }

                if (document.querySelectorAll(".change-currency-container").length) {

                    var resBtns = document.querySelectorAll(".change-currency-container span")


                    for (const btn of resBtns) {    
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();

                            document.querySelector(".change-currency span").innerHTML = sender.innerHTML;
                            document.querySelector(".change-currency").classList.remove("on");


                        });
                    }

                }

              

                if (document.querySelectorAll(".search-btn-js").length) {

                    var resBtns = document.querySelectorAll(".search-btn-js")
                    var activityContainer = document.querySelector("#activity-container");

                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();

                            if (sender.classList.contains("on")) {
                                sender.classList.remove("on")
                                activityContainer.classList.remove("search-on")
                            } else {
                                sender.classList.add("on")
                                activityContainer.classList.add("search-on")
                            }
                            


                        });
                    }
                   
                }

                if (document.querySelector(".search-btn-modal-js")) {

                    var btn = document.querySelector(".search-btn-modal-js")


                    btn.addEventListener("click", function (event) {
                        
                        var sender = event.target;
                        event.preventDefault();

                        sender.parentElement.parentElement.parentElement.classList.add("search-on")
                        sender.parentElement.parentElement.parentElement.parentElement.classList.add("search-wrapper")

                    });
                }

                if (document.querySelectorAll(".close-reservation-btn")) {

                    var resBtns = document.querySelectorAll(".close-reservation-btn")
                    var firstScreen = document.querySelector("#column-02-container");
                    var secondScreen = document.querySelector("#column-03-container");


                    for (const btn of resBtns) {
                        btn.addEventListener("click", function (event) {
                            var sender = event.target;
                            event.preventDefault();
                            document.querySelector(".comp-header-01").classList.remove("controlling");
                            secondScreen.classList.remove("open");
                            setTimeout(function () {
                                firstScreen.classList.remove("close");

                            }, 400)


                        });
                    }
                    
                }
               
                if (document.querySelector(".close-result-avl")) {

                    var toggleBtn = document.querySelector(".close-result-avl")
                    var filterConteiner = document.querySelector(".first-c-wrapper")
                    var senderParent = document.querySelector(".mobile-filter-container")



                    toggleBtn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();
                        filterConteiner.classList.remove("on");
                        senderParent.classList.remove("off");

                    });
                }
                if (document.querySelector(".check-in")) {

                    var toggleBtn = document.querySelector(".check-in")
                    var filterConteiner = document.querySelector(".first-c-wrapper")
                    var senderParent = document.querySelector(".mobile-filter-container")
                    
                  

                    toggleBtn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();
                        senderParent.classList.add("off");
                        filterConteiner.classList.add("on");

                    });
                }
                if (document.querySelector(".show-or-hide-filter")) {
                    
                    var filterBtn = document.querySelector(".show-or-hide-filter")
                    var filterContainer = document.querySelector(".filter-container");
                    var villaListing = document.querySelector(".villa-listing");

                    filterBtn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();

                        if (filterBtn.classList.contains("off")) {
                            filterContainer.classList.remove("off");
                            filterBtn.classList.remove("off");
                            filterBtn.innerHTML = "Hide Filter";
                            villaListing.classList.add("on");
                            villaListing.classList.remove("off");
                        } else {
                            filterContainer.classList.add("off");
                            filterBtn.classList.add("off")
                            filterBtn.innerHTML = "Show Filter";
                            villaListing.classList.remove("on");
                            villaListing.classList.add("off");
                        }

                    });
                }
                if (document.querySelector(".person-count .minus")) {
                    
                    var minusBtn = document.querySelector(".person-count .minus")
                    var personInput = document.querySelector(".person-input");

                    minusBtn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();
                        if (personInput.value > 1) {
                            personInput.value = parseInt(personInput.value) - 1;
                        }
                      

                    });
                }
                if (document.querySelector(".person-count .minus")) {

                    var plusBtn = document.querySelector(".person-count .plus")
                    var personInput = document.querySelector(".person-input");

                    plusBtn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();

                        personInput.value = parseInt(personInput.value) + 1;

                    });
                }
                if (document.querySelector("#swicht-map-or-list")) {

                    var btn = document.querySelector("#swicht-map-or-list")
                    var listScreen = document.querySelector("#list-container");
                    var mapScreen = document.querySelector("#map");

                    btn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();

                        if (listScreen.classList.contains("off")) {
                            mapScreen.classList.add("off");
                            listScreen.classList.remove("off");
                            btn.classList.remove("active");
                        } else {
                            mapScreen.classList.remove("off");
                            listScreen.classList.add("off");
                            btn.classList.add("active");
                        }

                    });
                }

                if (document.querySelector("#check-availability")) {

                    var btn = document.querySelector("#check-availability");
                    var firstScreen = document.querySelector("#column-02-container");
                    var secondScreen = document.querySelector("#column-03-container");

                    btn.addEventListener("click", function (event) {

                        var sender = event.target;
                        event.preventDefault();
                        if (document.querySelector("#activity-container").classList.contains("search-on")){
                            document.querySelector("#activity-container").classList.remove("search-on");
                        }
                        
                        document.querySelector(".comp-header-01").classList.add("controlling");
                        firstScreen.classList.add("close");
                        secondScreen.classList.add("open");
                                
                        });
                    }
                }
            },
        },
    
};

$(document).ready(function () {
    Feux.Page.UX.Actions.init();

    
});
