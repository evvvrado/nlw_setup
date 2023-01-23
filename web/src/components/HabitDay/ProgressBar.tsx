import React from "react"

interface ProgressBarInterface {
	progress?: number
}

// import { Container } from './styles';

const ProgressBar: React.FC<ProgressBarInterface> = ({ progress = 0 }) => {
	return (
		<div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
			<div
				role="progressbar"
				aria-label="Progresso de hábitos completados nesse dia"
				aria-aria-valuenow={progress}
				className="h-3 rounded-xl bg-violet-600"
				style={{ width: `${progress}%` }}
			></div>
		</div>
	)
}

export default ProgressBar
