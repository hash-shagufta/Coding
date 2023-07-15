export interface NavbarItemType {
    label: string;
    href: string;
    isDropDown: boolean;
    dropDownData?: Array<NavbarItemType>;
}


export const NavbarArray : Array < NavbarItemType > = [
    {
      label: "Female",
      href: "/female",
      isDropDown: true,
      dropDownData:[
        {
          label: "Dresses",
          href: "/female/dresses",
          isDropDown: false,
        },
        {
          label: "Shirts",
          href: "/female/shirts",
          isDropDown: false,
        },
        {
          label: "Pants",
          href: "/female/pants",
          isDropDown: false,
        },
        {
          label: "Jackets",
          href: "/female/Jackets",
          isDropDown: false,
        },
      ]
    },
    {
      label: "Male",
      href: "/male",
      isDropDown: true,
      dropDownData:[
        {
          label: "Shorts",
          href: "/male/shorts",
          isDropDown:false
        },
        {
          label: "Shirts",
          href: "/male/shirs",
          isDropDown:false
        },
        {
          label: "Pants",
          href: "/male/pants",
          isDropDown:false
        },
        {
          label: "Jackets",
          href: "/male/Jackets",
          isDropDown:false
        },
      ]
    },

    {
      label: "Kids",
      href: "/kids",
      isDropDown: false,
    },
    {
      label: "All Product",
      href: "/AllProduct",
      isDropDown: false,
    },
  ];