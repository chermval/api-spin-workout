import { Test } from '@nestjs/testing';
import { WorkoutsRepository } from '../workouts/workouts.repository';
import { WorkoutsService } from '../workouts/workouts.service';

const mockWorkoutsRepository = () => ({
  find: jest.fn(),
  findOne: jest.fn(),
});

describe('WorkoutsService', () => {
  let workoutsService: WorkoutsService;
  let workoutsRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        WorkoutsService,
        { provide: WorkoutsRepository, useFactory: mockWorkoutsRepository },
      ],
    }).compile();

    workoutsService = module.get(WorkoutsService);
    workoutsRepository = module.get(WorkoutsRepository);
  });

  describe('findAll', () => {
    it('calls WorkoutsService.findAll and returns the result', async () => {
      expect(workoutsRepository.find).not.toHaveBeenCalled();

      workoutsRepository.find.mockResolvedValue('someValue');

      const result = await workoutsService.findAll();
      expect(workoutsRepository.find).toHaveBeenCalled();
      expect(result).toEqual('someValue');
    });
  });

  describe('findById', () => {
    it('calls WorkoutsService.findById and returns the result', async () => {
      const mockWorkout = {
        id: 'id',
        distance: '120',
        time: '30',
        velocity: '14',
        pulse: '130',
        date: '2021-06-22',
      };

      workoutsRepository.findOne.mockResolvedValue(mockWorkout);
      const result = await workoutsService.findById('id');
      expect(result).toEqual(mockWorkout);
    });
  });
});
