import fs from 'fs-extra'
import { CircomCircuitUserConfig } from 'hardhat-circom'
import toml from 'toml'

export function importCircuits() {
  const circuitNames = fs
    .readdirSync('./circuits/', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  let circuits: CircomCircuitUserConfig[] = []

  const config = toml.parse(fs.readFileSync('./circuits/circuit.config.toml', 'utf-8'))

  circuitNames.forEach((name, index) => {
    let protocol = config.protocol[name] || config.protocol.default
    let compiler = config.compiler[name] || config.compiler.default
    circuits[index] = {
      name: name,
      version: compiler,
      protocol: protocol,
      circuit: `${name}/circuit.circom`,
      input: `${name}/input.json`,
      wasm: `${name}/${name}.wasm`,
      r1cs: `${name}/${name}.r1cs`,
      zkey: `${name}/${name}.zkey`,
      vkey: `${name}/${name}.vkey.json`,
    }
  })

  return circuits
}
