document.addEventListener('DOMContentLoaded', function () {

    if (window.innerWidth > 767) {
        const columnItems = document.querySelectorAll('.the-bvlt-difference__list li');
        const redColumnItems = document.querySelectorAll('#column-red li');
        const greenColumnItems = document.querySelectorAll('#column-green li');

        function compareColumnsHeight() {

            columnItems.forEach(function (item) {
                item.removeAttribute("style");
            });

            for (let i = 0; i < redColumnItems.length; i++) {
                let itemRedHeight = redColumnItems[i].getBoundingClientRect().height;
                let itemGreenHeight = greenColumnItems[i].getBoundingClientRect().height;

                if (itemRedHeight < itemGreenHeight) {
                    redColumnItems[i].style.height = itemGreenHeight + 'px';
                } else {
                    greenColumnItems[i].style.height = itemRedHeight + 'px';
                }
            }
        }

        compareColumnsHeight();

        window.addEventListener('resize', function () {
            compareColumnsHeight();
        });
    }
});