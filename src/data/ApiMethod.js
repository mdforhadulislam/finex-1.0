import dotenv from "dotenv";
dotenv.config("../../../");

export const ROOT_API =  "https://finex-1-0.vercel.app/"
// export const ROOT_API =  "http://localhost:3000"
export const HEALTH_API = `${ROOT_API}/api/health`;

export const ROOT_API_V1 = `${ROOT_API}/api/v1`;

export const LOGIN_API = `${ROOT_API_V1}/auth/login`;
export const REGISTER_API = `${ROOT_API_V1}/auth/register`;
export const LOGOUT_API = `${ROOT_API_V1}/auth/logout`;

export const USER_ACCOUNT_API = `${ROOT_API_V1}/account`;
export const USER_ACCOUNT_PHONE = (phone) => `${USER_ACCOUNT_API}/${phone}`;

export const COUNTRY_API = `${ROOT_API_V1}/country`;
export const SINGLE_COUNTRY_API = (id) => `${COUNTRY_API}/${id}`;

export const PRICE_API = `${ROOT_API_V1}/price`;
export const SINGLE_PRICE_API = (id) => `${ROOT_API_V1}/price/${id}`;
export const SINGLE_PRICE_LIST = (from, to) => `${ROOT_API_V1}/price/?from=${from}&to=${to}`;
export const QUOT_PRICE_API = (from, to, weight) => `${PRICE_API}/price-quot/?from=${from}&to=${to}&weight=${weight}`;

export const ORDER_API = `${ROOT_API_V1}/order`;
export const SINGLE_ORDER_API = (id) => `${ORDER_API}/${id}/`;
export const ORDER_PAYMENT_API = (id) => `${ORDER_API}/${id}/payment`;

export const TRACK_PARCEL_API = `${ROOT_API_V1}/track`;
export const SINGLE_TRACK_PARCEL_API = (id) => `${ROOT_API_V1}/track/${id}`;

export const PICKUP_API = `${ROOT_API_V1}/pickup`;
export const PICKUP_CONFIRM_API = (id) => `${ROOT_API_V1}/pickup/${id}/confirm`;
export const SINGLE_PICKUP_API = (id) => `${ROOT_API_V1}/pickup/${id}`;

export const CONTACT_API = `${ROOT_API_V1}/contact`;
export const VISITOR_API =   `${ROOT_API_V1}/visitor`

export const BLOG_API = `${ROOT_API_V1}/blog`
export const SINGLE_BLOG_API = (blogID) => `${ROOT_API_V1}/blog/${blogID}`
export const BLOG_IMAGE_UPLOAD_API =  `${ROOT_API_V1}/blog/blogImageUpload`



export const getRequestSend = async (url, header) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};



export const postRequestSend = async (url, header, dataSend) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      body: JSON.stringify(dataSend),
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};


export const putRequestSend = async (url, header, dataSend) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      body: JSON.stringify(dataSend),
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};



export const deleteRequestSend = async (url, header) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};
