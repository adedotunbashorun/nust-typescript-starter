const baseMenuList = [
  {
    "title": "Dashboard",
    "url": "admin/dashboard",
    "icon": "fa fa-dashboard fa-fw mr-3",
    "children":[]
  },
  {
    "title": "Category",
    "showDrowpDown": false,
    "icon": "fa fa-list fa-fw mr-3",
    "children":[
      {
        "title": "Category",
        "url": "admin/category",
        "icon": "fa fa-list fa-fw mr-3",
        "children":[]
      },
      {
        "title": "Subcategory",
        "url": "admin/category/sub",
        "icon": "fa fa-list fa-fw mr-3",
        "children":[]
      }
    ]
  },
];


export default baseMenuList;
