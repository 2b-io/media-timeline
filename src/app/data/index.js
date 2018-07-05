import events from './events'

const sorted = events
  .sort(
    (event1, event2) => event1.when.valueOf() - event2.when.valueOf()
  )

const timeRelated = sorted
  .map(
    (event, index) => {
      const nextEvent = sorted[index + 1]

      if (!nextEvent) {
        return event
      }

      return {
        ...event,
        next: nextEvent.when - event.when
      }
    }
  )
  .map(
    (event, index) => ({
      ...event,
      index: index
    })
  )

export default timeRelated
