function accordion(parent, target) {
    parent.classList.toggle('expanded');
    if (parent.classList.contains('expanded') && target.classList.contains('apply_code')) {
        target.style.display = 'flex';
    }
    else if (parent.classList.contains('expanded')) {
        target.style.display = 'block';
    }
    else {
        target.style.display = "none";
    }
}

function tabs(tab) {
    if (tab.classList.contains('active')) {
    }
    else {
        var tabs = document.querySelectorAll('.tabs p');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.toggle('active');
            if (tabs[i].classList.contains('active') && tabs[i].classList.contains('delivery_button')) {
                document.querySelector('.pickup_button').style.borderLeft = "0px";
                document.querySelector('.delivery_button').style.borderRight = "2px solid var(--darker-primary)";
                document.querySelector('div.pickup').style.display = "none";
                document.querySelector('div.delivery').style.display = "flex";
            }
            else if (tabs[i].classList.contains('active') && tabs[i].classList.contains('pickup_button')) {
                document.querySelector('.delivery_button').style.borderRight = "0px";
                document.querySelector('.pickup_button').style.borderLeft = "2px solid var(--darker-primary)";
                document.querySelector('div.delivery').style.display = "none";
                document.querySelector('div.pickup').style.display = "flex";
            }
        }
    }
}

function adjustDesktopView() {
    if (window.innerWidth >= '1024' && document.querySelector('.sticky_div') == undefined) {
        var sticky_div = document.createElement('div');
        sticky_div.className = "sticky_div";
        var order = document.querySelector('.order_summary');
        document.querySelector('.order_header + hr').style.display = "none";
        document.querySelector('.order_header').style.display = "none";
        var footer = document.querySelector('footer');
        sticky_div.appendChild(order);
        sticky_div.appendChild(footer);
        document.body.appendChild(sticky_div);
    }
    else if (window.innerWidth <= '1024' && document.querySelector('.sticky_div') != undefined) {
        var container = document.querySelector('.container');
        var order = document.querySelector('.order_summary');
        container.insertBefore(order, container.children[1]);
        document.querySelector('.order_header + hr').style.display = "block";
        document.querySelector('.order_header').style.display = "flex";
        var footer = document.querySelector('footer');
        container.appendChild(footer);
        document.querySelector('.sticky_div').remove();
    }
}

window.addEventListener('load', adjustDesktopView);
window.addEventListener('resize', adjustDesktopView);