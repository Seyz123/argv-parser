class ArgvParser
{

	constructor()
	{
		this.argv = this.parseArgv(process.argv.slice(2));
	}

	parseArgv(argv)
	{
		var json = {};

		argv.forEach(function(arg)
		{
			if(arg.includes("--"))
			{
				arg = arg.slice(2);
				arg = arg.split("=");
				if(!arg[1]){
					return;
				}
				json[arg[0]] = arg[1];
			}
			else if(arg.includes("-") && !arg.includes("--"))
			{
				arg = arg.slice(1);
				arg = arg.split("=");
				if(!arg[1]){
					return;
				}
				json[arg[0]] = arg[1];
			}
			else
			{
				return;
			}
		});

		return json;
	}

	getArgs()
	{
		return this.argv;
	}

	getArg(arg = null)
	{
		if(!this.argExists(arg))
		{
			return false;
		}

		return this.getArgs()[arg];
	}

	argExists(arg = null)
	{
		if(!this.getArgs()[arg])
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

module.exports = new ArgvParser();