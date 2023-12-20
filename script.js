const translations = {
  'kg': {
    'bashky-bet': 'Башкы бет',
    'company': 'Компания',
    'kyzmattar': 'Кызматтар',
    'ulgulor': 'Үлгүлөр',
    'onoktoshtor': 'Oноктоштор',
    'soorolor': 'Суроолор',
    'baylahysh': 'Байланыш',
    'title1': 'Мурасты каттоо',
    'title2': '',
    'text1': 'Бардык сот инстанцияларында кызыкчылыктарды коргоо',
    'text2': 'Оозеки жана кат жузундо кенеш беруу',
    'text3': 'Бардык иштерде багыт аныктап беруу',
    'text4': 'Доо арыздарды даярдоо',
    'text5': 'Сот чыгарган актыларды даттануу',
    'text6': 'Апелляциялык жана кассациялык даттанууларды даярдоо',
    'text7': 'Жарашуу келишимдерин тузуу',
    'text8': 'Аткаруу ондурушуно катышуу',
    'muras1': 'керезди талашуу',
    'muras2': 'мурас улушун аныктоо',
    'muras3': 'нотариустун аракетин даттануу ',
    'muras4': 'мураскердин укугун сотто коргоо',
    'muras5': 'туугандык мамилесин аныктоо',
    'muras6': 'мурасты кабыл алууну аныктоо',
    'muras7': 'жарандык абал актыларындагы туура эмес жазууларды четтетуу',
  },
  'ru': {
    'bashky-bet': 'Главная',
    'company': 'Компания',
    'kyzmattar': 'Услуги',
    'ulgulor': 'Образцы',
    'onoktoshtor': 'Партнеры',
    'soorolor': 'Вопросы',
    'baylahysh': 'Контакты',
    'title1': 'Оформление наследства',
    'title2': '',
    'text1': 'Представление интересов в судах всех инстанций',
    'text2': 'Устные и письменные консультации',
    'text3': 'Выработка позиции по делу',
    'text4': 'Подготовка исковых заявлений в суд',
    'text5': 'Обжалование судебных актов (решений, определений)',
    'text6': 'Подготовка жалоб (апелляционных, кассационных, в порядке надзора).',
    'text7': 'Составление мировых соглашений',
    'text8': 'Участие на стадии исполнительно производства',
    'muras1': 'раздел наследства',
    'muras2': 'оспаривание завещания',
    'muras3': 'оспаривание действий нотариуса ',
    'muras4': 'представление интересов наследникав нотариальной конторе и суде ',
    'muras5': 'установление факта родственных отношений',
    'muras6': 'установление факта принятия наследства',
    'muras7': 'устранение неправильностей в актах гражданского состояния',
  }
};

const langItem = document.querySelectorAll('.lang div')
const burgerMenu = document.querySelector('.burger-menu')
const navItem = document.querySelectorAll('.nav ul li')
const kg = document.querySelector('.kg')
const ru = document.querySelector('.ru')

function changeActiveLang() {
  kg.classList.toggle('active')
  ru.classList.toggle('active')
}

Array.from(langItem).forEach(element => {
  element.addEventListener('click', function (event) {
    if(event.target.innerText === 'русский') {
      Object.keys(translations.ru).forEach((item, i) => {
        document.getElementById(item) ? document.getElementById(item).innerText = translations.ru[item] : false
      })
      
    } else if(event.target.innerText === 'кыргызча') {
      Object.keys(translations.kg).forEach((item, i) => {
        document.getElementById(item) ? document.getElementById(item).innerText = translations.kg[item] : false
      })
    }
    changeActiveLang()
  })  
});

navItem.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active')
  })
})

burgerMenu.addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active')
})



