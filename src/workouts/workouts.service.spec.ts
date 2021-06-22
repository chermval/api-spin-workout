import { Test } from "@nestjs/testing";
import { WorkoutsRepository } from "../workouts/workouts.repository";
import { WorkoutsService } from "../workouts/workouts.service";

const mockWorkoutsRepository = () => ({
    find: jest.fn(),
});

describe('WorkoutsService', () => {
    let workoutsService: WorkoutsService;
    let workoutsRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [WorkoutsService, 
                { provide: WorkoutsRepository, useFactory: mockWorkoutsRepository}, 
            ],
        }).compile();

        workoutsService = module.get(WorkoutsService);
        workoutsRepository = module.get(WorkoutsRepository);
    });

    describe( 'findAll', () => {
        it ('calls WorkoutsService.findAll and returns the result', async () => {
            expect(workoutsRepository.find).not.toHaveBeenCalled();

            workoutsRepository.find.mockResolvedValue('someValue');

            const result = await workoutsService.findAll();
            expect(workoutsRepository.find).toHaveBeenCalled();
            expect(result).toEqual('someValue');
        });
    });

});