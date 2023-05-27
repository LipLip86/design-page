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

export interface IView {
  title: string,
  content: string,
  image: any
}

export interface ITab {
  id: string;
  tabTitle: string;
  viewsLeft?: IView[];
  viewsRight?: IView[];
}

export interface ICard {
  title: string,
  text: string,
  link: string,
  className?: string
}

// -- -- -- -- -- -- -- Home Page  -- -- -- -- -- -- --
export interface IStageCard {
  title: string;
  text: string;
  link: string;
}
