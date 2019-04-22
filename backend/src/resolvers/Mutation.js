const Mutations = {
  async createCar(parent, args, ctx, info) {
    //TODO: check if they are logged in

    const car = await ctx.db.mutation.createCar(
      {
        data: {
          //add relationship here
          ...args
        }
      },
      info
    );

    return car;
  }
};

module.exports = Mutations;
