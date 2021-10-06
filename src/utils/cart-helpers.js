import { toast } from "react-toastify";

export const handleItemAdded = (item) =>
  toast.success(`${item.title} added to cart!`);

export const handleItemUpdated = (item) =>
  toast.success(`${item.title} updated!`);

export const handleItemRemoved = () => toast.success(`Removed from cart`);
