import shopifyBackendURL from "../constants/backendURL";

interface UpdateCheckoutResult {
  success: boolean;
  error: string;
}

export const updateCheckout = async (
  checkoutId: string,
  address: any,
  setEmail: (email: string) => void,
  setShippingAddress: (address: any) => void
): Promise<UpdateCheckoutResult> => {
  try {
    console.log("Handling the updateCheckout function");
    console.log("Checkout ID:", checkoutId);
    console.log("Address:", address);

    const response = await fetch(`${shopifyBackendURL}/checkout/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: checkoutId,
        address: address,
      }),
    });

    if (response.ok) {
      const checkout = await response.json();
      const email = checkout.email;
      setEmail(email);
      setShippingAddress(address);
      return {
        success: true,
        error: "",
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        error: "Failed to update shipping address",
      };
    }
  } catch (error) {
    console.error("Error in updateCheckout function:", error);
    return {
      success: false,
      error: "An error occurred while updating the shipping address",
    };
  }
};
