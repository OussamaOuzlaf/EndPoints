import express from 'express';
import { studentModel } from '../models/student';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const student = await studentModel.find();
        res.status(200).send(student)
    } catch {
        res.status(500).send("not found Data (GET)")
    }
})

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        console.log({ data });
        const newStudent = await studentModel.create(data)
        newStudent.save()
        res.status(201).send(newStudent)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const updateStudent = await studentModel.findByIdAndUpdate(id, data, { new: true });
    if (!updateStudent) {
        res.status(404).send("Can't found Student")
    }
    res.send(updateStudent)
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const updateStudent = await studentModel.findByIdAndDelete(id);
    if (!updateStudent) {
        return res.status(404).send("Can't found Student")
    }
    res.send("okay")
})

export default router;