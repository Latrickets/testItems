export const formatResponse = (res, data = null, status, message) => {
  return res.status(status).json({
    status,
    message,
    data,
  });
};
