FROM mongo:3.0

EXPOSE 27017

VOLUME ["/data/db"]

CMD mongod --smallfiles --logpath=/dev/null --setParameter failIndexKeyTooLong=false