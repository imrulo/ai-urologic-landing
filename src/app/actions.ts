"use server";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const offer = formData.get("offer");
    const message = formData.get("message");

    // In a real application, you would send an email or save to a database here.
    console.log("Contact Form Submission:", { name, email, offer, message });

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        success: true,
        message: "Thank you for your inquiry. We will be in touch shortly.",
    };
}
