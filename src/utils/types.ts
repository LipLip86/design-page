export interface ICommonCard {
  id: number,
  imgUrl: string,
  span: string,
  text: string,
  date: string,
  button: string
}

export interface IForm {
  name: string,
  value: string,
  label: string
}

export interface ITabs {
  id: string;
  tabTitle: string;
  viewsLeft?: any;
  viewsRight?: any;
}

export interface ICard {
  title: string,
  text: string,
  link: string,
  className?: string
}
