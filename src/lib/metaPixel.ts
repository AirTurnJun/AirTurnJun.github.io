export type MetaPixelProduct = {
  id: string;
  name: string;
  price: number;
  currency: string;
};

type MetaPixelParams = Record<string, unknown>;

const getFbq = () => {
  if (typeof window === "undefined") return null;
  const fbq = (window as any).fbq;
  return typeof fbq === "function" ? fbq : null;
};

const track = (event: string, params?: MetaPixelParams) => {
  const fbq = getFbq();
  if (!fbq) return;
  if (params) {
    fbq("track", event, params);
    return;
  }
  fbq("track", event);
};

export const trackCustom = (event: string, params?: MetaPixelParams) => {
  const fbq = getFbq();
  if (!fbq) return;
  if (params) {
    fbq("trackCustom", event, params);
    return;
  }
  fbq("trackCustom", event);
};

export const trackPageView = () => {
  track("PageView");
};

export const trackViewContent = (product: MetaPixelProduct) => {
  track("ViewContent", {
    content_ids: [product.id],
    content_name: product.name,
    content_type: "product",
    currency: product.currency,
    value: product.price,
    contents: [
      {
        id: product.id,
        quantity: 1,
        item_price: product.price
      }
    ]
  });
};

export const trackAddToCart = (product: MetaPixelProduct, quantity: number) => {
  const safeQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
  track("AddToCart", {
    content_ids: [product.id],
    content_name: product.name,
    content_type: "product",
    currency: product.currency,
    value: product.price * safeQuantity,
    contents: [
      {
        id: product.id,
        quantity: safeQuantity,
        item_price: product.price
      }
    ]
  });
};
