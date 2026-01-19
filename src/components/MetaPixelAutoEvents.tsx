import { useEffect } from "react";
import { trackCustom } from "@/lib/metaPixel";

type TrackTarget = HTMLElement | null;

const MAX_LABEL_LENGTH = 120;

const normalizeText = (value: string | null | undefined) => {
  if (!value) return "";
  return value.replace(/\s+/g, " ").trim().slice(0, MAX_LABEL_LENGTH);
};

const getElementLabel = (el: HTMLElement) => {
  const datasetLabel = el.getAttribute("data-track-label");
  if (datasetLabel) return normalizeText(datasetLabel);

  const aria = el.getAttribute("aria-label");
  if (aria) return normalizeText(aria);

  const title = el.getAttribute("title");
  if (title) return normalizeText(title);

  if (el instanceof HTMLInputElement) {
    return normalizeText(el.value || el.getAttribute("value") || "");
  }

  return normalizeText(el.textContent || "");
};

const getFormInfo = (form: HTMLFormElement | null) => {
  if (!form) return {};
  const action = form.getAttribute("action") || "";
  const actionPath = action.startsWith("http")
    ? new URL(action).pathname
    : action;

  return {
    form_id: form.id || undefined,
    form_name: form.getAttribute("name") || undefined,
    form_action: actionPath || undefined,
    form_method: (form.getAttribute("method") || "get").toLowerCase()
  };
};

const getInputInfo = (input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => ({
  input_type: input instanceof HTMLInputElement ? input.type : input.tagName.toLowerCase(),
  input_name: input.getAttribute("name") || undefined,
  input_id: input.id || undefined,
  input_required: input.hasAttribute("required") || undefined
});

const shouldSkip = (el: TrackTarget) => {
  if (!el) return true;
  return el.getAttribute("data-meta-skip") === "true";
};

export const MetaPixelAutoEvents = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest(
        'button, [role="button"], input[type="button"], input[type="submit"], a[data-track-button="true"]'
      ) as HTMLElement | null;

      if (!button || shouldSkip(button)) return;

      trackCustom("ButtonClick", {
        label: getElementLabel(button) || undefined,
        tag: button.tagName.toLowerCase(),
        id: button.id || undefined,
        name: button.getAttribute("name") || undefined,
        path: window.location.pathname
      });
    };

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || shouldSkip(form)) return;

      trackCustom("FormSubmit", {
        ...getFormInfo(form),
        path: window.location.pathname
      });
    };

    const handleFocusIn = (event: FocusEvent) => {
      const input = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      if (!input || shouldSkip(input)) return;
      if (input instanceof HTMLInputElement && (input.type === "hidden" || input.type === "password")) return;

      trackCustom("InputFocus", {
        ...getInputInfo(input),
        ...getFormInfo(input.closest("form")),
        path: window.location.pathname
      });
    };

    const handleBlur = (event: FocusEvent) => {
      const input = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      if (!input || shouldSkip(input)) return;
      if (input instanceof HTMLInputElement && (input.type === "hidden" || input.type === "password")) return;

      trackCustom("InputBlur", {
        ...getInputInfo(input),
        ...getFormInfo(input.closest("form")),
        path: window.location.pathname
      });
    };

    const handleChange = (event: Event) => {
      const input = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
      if (!input || shouldSkip(input)) return;
      if (input instanceof HTMLInputElement && (input.type === "hidden" || input.type === "password")) return;

      trackCustom("InputChange", {
        ...getInputInfo(input),
        ...getFormInfo(input.closest("form")),
        path: window.location.pathname
      });
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    document.addEventListener("focusin", handleFocusIn, true);
    document.addEventListener("focusout", handleBlur, true);
    document.addEventListener("change", handleChange, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
      document.removeEventListener("focusin", handleFocusIn, true);
      document.removeEventListener("focusout", handleBlur, true);
      document.removeEventListener("change", handleChange, true);
    };
  }, []);

  return null;
};
