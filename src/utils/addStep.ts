import { MoveArray, TypesMoves } from 'types/interfaceGameRedux';

function randomStep(stepPrev: string[], sizeField: number): string {
	const nameStep: string[] = [];
	if (stepPrev[0] === '0') {
		if (stepPrev[1] === '0') {
			nameStep.push(TypesMoves.RIGHT, TypesMoves.DOWN);
		} else if (stepPrev[1] === `${sizeField - 1}`) {
			nameStep.push(TypesMoves.LEFT, TypesMoves.DOWN);
		} else {
			nameStep.push(TypesMoves.LEFT, TypesMoves.DOWN, TypesMoves.RIGHT);
		}
	} else if (stepPrev[0] === `${sizeField - 1}`) {
		if (stepPrev[1] === `0`) {
			nameStep.push(TypesMoves.RIGHT, TypesMoves.UP);
		} else if (stepPrev[1] === `${sizeField - 1}`) {
			nameStep.push(TypesMoves.LEFT, TypesMoves.UP);
		} else {
			nameStep.push(TypesMoves.RIGHT, TypesMoves.UP, TypesMoves.RIGHT);
		}
	} else {
		if (stepPrev[1] === `0`) {
			nameStep.push(TypesMoves.RIGHT, TypesMoves.UP, TypesMoves.DOWN);
		} else if (stepPrev[1] === `${sizeField - 1}`) {
			nameStep.push(TypesMoves.LEFT, TypesMoves.UP, TypesMoves.DOWN);
		} else {
			nameStep.push(TypesMoves.LEFT, TypesMoves.UP, TypesMoves.DOWN, TypesMoves.RIGHT);
		}
	}
	return nameStep[Math.floor(Math.random() * nameStep.length)];
}

function getPosition(stepName: string, positionPrev: string, grid: string[][]): string {
	const coordinates: string[] = positionPrev.split('');

	if (stepName === TypesMoves.LEFT) {
		return grid[Number(coordinates[0])][Number(coordinates[1]) - 1];
	}
	if (stepName === TypesMoves.RIGHT) {
		return grid[Number(coordinates[0])][Number(coordinates[1]) + 1];
	}
	if (stepName === TypesMoves.UP) {
		return grid[Number(coordinates[0]) - 1][Number(coordinates[1])];
	}
	if (stepName === TypesMoves.DOWN) {
		return grid[Number(coordinates[0]) + 1][Number(coordinates[1])];
	}
	return '';
}

export function addStep(size: number, grid: string[][], finish: string, steps: number): MoveArray[] {
	const stepArray: MoveArray[] = [];

	for (let i = 0; i < steps; i++) {
		const step =
			i === 0 ? randomStep(finish.split(''), size) : randomStep(stepArray[i - 1].newPosition.split(''), size);
		const newPosition =
			i === 0 ? getPosition(step, finish, grid) : getPosition(step, stepArray[i - 1].newPosition, grid);
		stepArray.push({
			newPosition: newPosition,
			moveName: step
		});
	}
	return stepArray;
}
