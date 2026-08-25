import { JSX } from "react";
export interface validnum {
  Cnumber: string;
  number: string;
}

export interface login {
  email: string;
  password: string;
}

export interface register {
  name: string;
  email: string;
  password: string;
  otp: string;
}

export interface nextregister {
  name: string;
  email: string;
  password: string;
  otp: string;
  action: string;
  Cpassword: string;
}
export interface nextregister2 {
  name: string;
  email: string;
  password: string;
  otp: string;
  Cpassword: string;
}

export interface OTP {
  email: string;
}

export interface checkout {
  imei: string;
  zipcode: string;
}

export interface otpemail {
  email: string;
}

export interface logindata {
  email: string;
  password: string;
}

export interface stay {
  cart: {
    items: {
      data_usable: string;
      price: string;
    };
  };
}

export interface state {
  cart: {
    items: {
      id: string;
      slug: string;
      image: string;
      blog_category: {
        name: string;
        slug: string;
      };
      author_image: string;
      sub_content: string;
      data_usable: string;
      author_name: string;
      name: string;
      price: string;
      created_at_diff_for_humans: string;
    };
  };
}

interface FAQItem {
  question: string;
  answer: () => string | JSX.Element;
}

export interface FAQdata {
  data: FAQItem[];
}

export interface data {
  id: string;
  slug: string;
  image: string;
  blog_category: {
    name: string;
    slug: string;
  };
  author_image: string;
  sub_content: string;
  data_usable: string;
  author_name: string;
  name: string;
  price: string;
  created_at_diff_for_humans: string;
}

export interface reduxitems {
  items: data[];
}
