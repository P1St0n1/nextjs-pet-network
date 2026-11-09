import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.join(process.cwd(), 'public', 'animals.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const animals = JSON.parse(fileContent);

      // Создаём новую карточку животного
      const newAnimal = {
        content: `Анкета: ${req.body.name}, порода ${req.body.breed}, возраст ${req.body.age} лет`,
        header: req.body.name,
        email: 'user@example.com',
        img: `https://via.placeholder.com/800x600?text=${encodeURIComponent(req.body.name)}`
      };

      animals.push(newAnimal);

      // Записываем обновлённый массив обратно в файл
      fs.writeFileSync(filePath, JSON.stringify(animals, null, 2), 'utf8');

      res.status(201).json(newAnimal);
    } catch (error) {
      res.status(500).json({ error: 'Ошибка сохранения данных' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешён' });
  }
}