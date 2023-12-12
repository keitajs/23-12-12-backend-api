import { Router } from 'express'
import chalk from 'chalk'
import zarodolgozatok from '../models/zarodolgozatok.js'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    if (!req.params.id) return res.status(200).send('backend api')
    const results = await zarodolgozatok.findOne({ where: { id: req.params.id } })

    console.log(chalk.bgMagenta(' API ') + ' get data | id: ' + chalk.green(req.params.id))
    res.status(200).send(results)
  } catch (error) {
    console.log(error)
    res.status(500).send('error')
  }
})

router.post('/', async (req, res) => {
  try {
    const results = await zarodolgozatok.create({
      nev: req.body.nev,
      zarodolgozatcim: req.body.zarodolgozatcim,
      rovidleiras: req.body.rovidleiras,
      leadasidatum: req.body.leadasidatum,
      konzulensnev: req.body.konzulensnev,
      ertekeles: req.body.ertekeles
    })

    console.log(chalk.bgMagenta(' API ') + ' post data | new data id: ' + chalk.green(results.id))
    res.status(200).send(results)
  } catch (error) {
    console.log(error)
    res.status(500).send('error')
  }
})

router.put('/:id', async (req, res) => {
  try {
    if (!req.params.id) return res.status(200).send('bad request')
    await zarodolgozatok.update({
      nev: req.body.nev,
      zarodolgozatcim: req.body.zarodolgozatcim,
      rovidleiras: req.body.rovidleiras,
      leadasidatum: req.body.leadasidatum,
      konzulensnev: req.body.konzulensnev,
      ertekeles: req.body.ertekeles
    }, { where: { id: req.params.id } })

    console.log(chalk.bgMagenta(' API ') + ' put data | id: ' + chalk.yellow(req.params.id))
    res.status(200).send('success')
  } catch (error) {
    console.log(error)
    res.status(500).send('error')
  }
})

router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) return res.status(200).send('bad request')
    await zarodolgozatok.destroy({ where: { id: req.params.id } })

    console.log(chalk.bgMagenta(' API ') + ' delete data | id: ' + chalk.red(req.params.id))
    res.status(200).send('success')
  } catch (error) {
    console.log(error)
    res.status(500).send('error')
  }
})

export default router