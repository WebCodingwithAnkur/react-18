
const deleteData = async (id) => {
  try {
    await fetch(`https://api.example.com/data/${id}`, {
      method: 'DELETE',
    });
    console.log('Data successfully deleted');
  } catch (error) {
    console.error('Error:', error);
  }
};

export default deleteData;