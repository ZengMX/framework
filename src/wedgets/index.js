const widgets = {
    get BaseView() {return require('./BaseView').default},
    get NavBar() {return require('./LXNavBar').default},
    get BaseComponent() {return require('./BaseComponent').default},
    get LXListView() {return require('./LXListView').default}
}

module.exports = widgets;