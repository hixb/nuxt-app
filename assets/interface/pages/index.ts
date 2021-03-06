/**
 * 首页侧边栏
 */
export interface IMenuList {
  ident: string;
  title: string;
  icon: string;
  className: string;
  list: any;
}

/**
 * 首页列表数据
 */
export interface IListData {
  id: number;
  title: string;
  description: string;
  author: string;
  createtime: string;
}
