import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import playerTpl from './templates/player.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}
function player() {
  $app.html(playerTpl())
}


function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/contact', contact)
router('/player', player)
router('*', notFound)
router()
