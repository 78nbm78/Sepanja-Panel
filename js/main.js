var Sepanja = Sepanja || {};
Sepanja.global = Sepanja.global || {};
Sepanja.global.init = function () {
    try {
        const allLinks = document.querySelectorAll('[href="#"]');
        allLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
            })
        })

    } catch (e) {
        console.log("Error on Sepanja.global.init : " + e)
    }
}

Sepanja.customSelect = Sepanja.customSelect || {};
Sepanja.customSelect.init = function () {
    try {
        function format(item, state) {
            if (!item.id) {
                return item.text;
            }
            var countryUrl = "https://hatscripts.github.io/circle-flags/flags/";
            var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
            var url = state ? stateUrl : countryUrl;
            var img = $("<img>", {
                class: "img-flag",
                width: 26,
                src: url + item.element.value.toLowerCase() + ".svg"
            });
            var span = $("<span>", {
                text: " " + item.text
            });
            span.prepend(img);
            return span;
        }

        $("#countries").select2({
            templateResult: function (item) {
                return format(item, false);
            }
        });

        $(".custom-select").select2();

    } catch (e) {
        console.log("Error on Sepanja.customSelect.init : " + e)
    }
}

Sepanja.productColumn = Sepanja.productColumn || {};
Sepanja.productColumn.init = function () {
  try {
    const columnEl = document.getElementById("changeToColumn"),
      rowEl = document.getElementById("changeToList");
    const wrapper = document.querySelector(".wrapper-changer");

    if (columnEl) {
      columnEl.addEventListener("click", function () {
        columnEl.classList.add("active");
        rowEl.classList.remove("active");
        wrapper.classList.add("column");
      });
    }

    if (rowEl) {
      rowEl.addEventListener("click", function () {
        columnEl.classList.remove("active");
        rowEl.classList.add("active");
        wrapper.classList.remove("column");
      });
    }
  } catch (e) {
    console.log(`Error on Sepanja.productColumn.init - ${e}`);
  }
};

Sepanja.sidebar = Sepanja.sidebar || {};
Sepanja.sidebar.init = function () {
  try {
    $(".toggle_sidebar").on("click", function () {
      $(".sidebar__box").toggleClass("active");
    });
  } catch (e) {
    console.log(`Error on Sepanja.sidebar - ${e}`);
  }
};

window.addEventListener("DOMContentLoaded", () => {
    Sepanja.global.init();
    Sepanja.productColumn.init();
})

$(function () {
    Sepanja.customSelect.init();
    Sepanja.sidebar.init();
});