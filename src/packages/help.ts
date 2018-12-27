export const help_info = `
  
  Usage: index [options] [command]

  Options:

    -v, --version     output the version number
    -h, --help        output usage information

  Commands:
    log               output log information
`

export default async function() {
  console.log(help_info)
  return help_info
}