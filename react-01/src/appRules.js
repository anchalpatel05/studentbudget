// Rules for adding a new app. These match the Joi validation on the server (app.js)
export const categories = ['Budgeting', 'Savings', 'Investing', 'Credit', 'Transfers', 'Transportation'];

export const limits = {
  nameMin: 2,
  nameMax: 40,
  descriptionMin: 10,
  descriptionMax: 200,
  iconSize: 2 * 1024 * 1024,
};

const isWebsite = (text) => {
  try {
    const url = new URL(text);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    return false;
  }
};

// Returns an object of error messages; empty means the app is valid
export function validateApp(values, icon) {
  const errors = {};
  const name = values.name.trim();
  const description = values.description.trim();
  const website = values.website.trim();

  if (!name) {
    errors.name = 'Please enter the app name.';
  } else if (name.length < limits.nameMin || name.length > limits.nameMax) {
    errors.name = `Name must be ${limits.nameMin}–${limits.nameMax} characters.`;
  }

  if (!categories.includes(values.category)) {
    errors.category = 'Please choose a category.';
  }

  if (values.price !== 'FREE' && values.price !== 'PAID') {
    errors.price = 'Please choose Free or Paid.';
  }

  if (!description) {
    errors.description = 'Please describe the app.';
  } else if (description.length < limits.descriptionMin || description.length > limits.descriptionMax) {
    errors.description = `Description must be ${limits.descriptionMin}–${limits.descriptionMax} characters.`;
  }

  if (website && !isWebsite(website)) {
    errors.website = 'Enter a full link starting with http:// or https://';
  }

  if (icon && !icon.type.startsWith('image/')) {
    errors.icon = 'The icon must be an image file.';
  } else if (icon && icon.size > limits.iconSize) {
    errors.icon = 'The icon must be smaller than 2MB.';
  }

  return errors;
}
