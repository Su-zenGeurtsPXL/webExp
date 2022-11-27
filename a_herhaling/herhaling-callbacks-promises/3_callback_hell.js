function drinkCoffee() {
    console.log('go to kitchen');
    setTimeout(function () {
        console.log('get a cup');
        setTimeout(function () {
            console.log('pour the coffee');
            setTimeout(function () {
                console.log('drink the coffee');
                setTimeout(function () {
                    console.log('all done');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
drinkCoffee();node 