import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: [
    {
      text: "Печать на текстильном принтере",
      logo: "https://sunshint.spb.ru/img/textileprinter2.jpg",
      body: "Печать на футболках , толстовках, бейсболках и прочих изделиях из хлопка (не менее 50%) от 1 штуки на заказ. Фотографии, надписи, фамилии, номера, рисунки и другие принты.",
      isNew: false,
    },
    {
      text: "Шелкография по ткани",
      logo: "https://sunshint.spb.ru/img/silkscreen2.jpg",
      body: "Оптовый и мелкооптовый пошив на заказ футболок, толстовок, штанов, шопперов, шапок, передников и других изделий. Изготовление футболок, толстовок и т.д. с логотипом заказчика на бирке.",
      isNew: true,
    },
    {
      text: "Шелкотрансфер",
      logo: "https://sunshint.spb.ru/img/transfer.jpg",
      body: "Нанесение многоцветных логотипов на толстовки, бейсболки, штаны и другие многослойные и рельефные текстильные поверхности от 10 шт.",
      isNew: false,
    },
    {
      text: "Тиснение",
      logo: "https://sunshint.spb.ru/img/stamping.jpg",
      body: "Блинтовое тиснение и тиснение фольгой по коже и кож. заму. Тиснение на ежедневники, планинги, визитницы и куски кожи на заказ.",
      isNew: false,
    },
    {
      text: "Пошив на заказ",
      logo: "https://sunshint.spb.ru/img/sewing.jpg",
      body: "Оптовый и мелкооптовый пошив на заказ футболок, толстовок, штанов, шопперов, шапок, передников и других изделий. Изготовление футболок, толстовок и т.д. с логотипом заказчика на бирке.",
      isNew: false,
    },
    {
      text: "печать этикеток (бирок)",
      logo: "https://sunshint.spb.ru/img/label.jpg",
      body: "Печать бирок и этикеток из сатина и нейлона; бумажных наклеек со штрихкодами и другой информацией. Любые тиражи. От 1 дня.",
      isNew: true,
    },
  ],
  ourProd: [
    {
      title: "Толстовки",
      logo: "https://sunshint.spb.ru/img/product_1.png",
    },
    {
      title: "Брюки трикотажные",
      logo: "https://sunshint.spb.ru/img/product_10.png",
    },
    {
      title: "Передники",
      logo: "https://sunshint.spb.ru/img/product_11.png",
    },
    {
      title: "Лонгсливы",
      logo: "https://sunshint.spb.ru/img/product_3.png",
    },
    {
      title: "Футболки",
      logo: "https://sunshint.spb.ru/img/product_4.png",
    },
    {
      title: "Поло",
      logo: "https://sunshint.spb.ru/img/product_5.png",
    },
    {
      title: "Майки",
      logo: "https://sunshint.spb.ru/img/product_6.png",
    },
    {
      title: "Сумки / рюкзаки",
      logo: "https://sunshint.spb.ru/img/product_7.png",
    },
    {
      title: "Головные уборы",
      logo: "https://sunshint.spb.ru/img/product_8.png",
    },
    {
      title: "Сувениры",
      logo: "https://sunshint.spb.ru/img/product_9.png",
    },
  ],
  ourNews: [
    {
      logo: "img/catalog/maski2.png",
      colors: "img/colors/56.png",
      title: 'Маска защитная "Стандарт"',
      price: "67",
      isNew: true,
    },
    {
      logo: "img/catalog/pantsFemDemiSeason.png",
      colors: "img/colors/5.png",
      title: "Штаны женские димисезонные",
      price: "1159",
      isNew: true,
    },
    {
      logo: "img/catalog/hoodieOS.png",
      colors: "img/colors/49.png",
      title: "толстовка Худи Оверсайз",
      price: "1892",
      isNew: true,
    },
    {
      logo: "img/catalog/poloStandMan.png",
      colors: "img/colors/54.png",
      title: "футболка-поло мужская",
      price: "801",
      isNew: true,
    },
    {
      logo: "img/catalog/hvost.png",
      colors: "img/colors/14.png",
      title: "футболка удлинённая с разрезами",
      price: "355",
      isNew: true,
    },
    {
      logo: "img/catalog/tinstandrt.png",
      colors: "img/colors/14.png",
      title: "подростковая футболка на заказ",
      price: "230",
      isNew: true,
    },
    {
      logo: "img/catalog/kidstandrt.png",
      colors: "img/colors/14.png",
      title: "детские футболки на заказ",
      price: "220",
      isNew: true,
    },
    {
      logo: "img/catalog/perednik1.png",
      colors: "img/colors/51.png",
      title: "передник фартук модель №1 от производителя Sun",
      price: "615",
      isNew: true,
    },
    {
      logo: "img/catalog/perednik2.png",
      colors: "img/colors/51.png",
      title: "передник фартук модель 2",
      price: "561",
      isNew: true,
    },
  ],
};

const service = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setNewBody(state) {
      console.log(state)
    }
  },
})

export const { setNewBody } = service.actions;

export default service.reducer