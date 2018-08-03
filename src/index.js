import $ from 'jquery';
import './style.css';




$('#login').click(() =>{
    console.log('Button clicked');


    import('./helpers').then(resp => {
        console.log('Import Response:', resp);

        const {login, addToDom} = resp;

        const result1 = login('SassySally', 'hjkl');

        const result2 = login('SassySally', 'hj3kl');


        addToDom('h1', result1, 'blue');
        addToDom('h1', result2, 'purple');

    })
});

$('#load-image').click( async () => {
    console.log('Load image clicked');
    const resp = await import ('./helpers');

    const {addImg} = resp;

    const src = await import('./webpacklogo.jpeg');

    addImg(src.default);
});