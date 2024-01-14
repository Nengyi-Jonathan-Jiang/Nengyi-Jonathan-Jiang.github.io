function update() {
    if (sessionStorage.getItem('use-override-bootstrap') === 'true') document.body.dataset['override'] = '';
    else delete document.body.dataset['override'];
}

function toggleBootstrapOverrides() {
    if (!('use-override-bootstrap' in sessionStorage)) {
        sessionStorage.setItem('use-override-boostrap', 'false');
    }
    sessionStorage.setItem('use-override-bootstrap', `${sessionStorage.getItem('use-override-bootstrap') !== 'true'}`)
    update();
}

update();
document.getElementById('pfp').oncontextmenu = _ => {
    toggleBootstrapOverrides();
    _.preventDefault()
}